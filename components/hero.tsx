'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { AvatarGroup } from './ui/avatar-group';

const ROTATING_WORDS = [
  'a coffee companion', 'a guitarist', 'an investor', 'a hiking friend',
  'a fashion designer', 'a dietician', 'a yoga teacher', 'a wine explorer',
  'a trip buddy', 'a cooking partner', 'a gaming buddy', 'an influencer',
  'a morning runner', 'a book lover', 'a chess rival', 'a film buff',
  'a language partner', 'a photography buddy', 'a startup mentor', 'a dance partner',
  'a tennis partner', 'a museum companion', 'a podcast co-host', 'a study buddy',
  'a swimming partner', 'a pottery teacher', 'a meditation guide', 'a baking partner',
  'a concert companion', 'a cycling buddy', 'a sketching partner', 'a career coach',
  'a climbing partner', 'a gardening friend', 'a board-game rival', 'a brunch companion',
];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <motion.span
        key={index}
        initial={{ y: '60%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-60%', opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.4, 0, 1, 1] }}
        className="inline-block whitespace-nowrap text-accent"
      >
        {ROTATING_WORDS[index]}
      </motion.span>
    </span>
  );
}

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(to * ease(t)));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <strong ref={ref} className="font-bold text-white">
      {value.toLocaleString()}
      {suffix}
    </strong>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 22]);

  return (
    <section id="hero" className="relative z-[2] p-0">
      <div ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden">
        <motion.div
          role="img"
          aria-label="People meeting and passing time at a street-side cafe"
          style={{ y, backgroundImage: "url('/assets/photography/hero_street_cafe.png')" }}
          className="absolute inset-0 bg-[#1c1a18] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(28,26,24,.88)] via-[rgba(28,26,24,.4)] to-transparent md:via-[rgba(28,26,24,.22)]" />

        <div className="relative mx-auto w-full max-w-[1140px] px-6 py-14 md:px-10">
          <motion.div
            className="max-w-[540px]"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.12 } } }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.76 }}
              className="mb-5 inline-block font-body text-xs font-bold uppercase tracking-[0.18em] text-[#f0c9b4]"
            >
              Human connection, in your terms
            </motion.span>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.76 }}
              className="font-display text-[38px] font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-[44px] md:text-[60px]"
            >
              Find people who <br className="hidden md:block" />
              want to{' '}
              <span className="relative whitespace-nowrap">
                be there
                <svg viewBox="0 0 300 16" preserveAspectRatio="none" className="absolute -bottom-[0.32em] left-[-2%] h-[0.5em] w-[104%] overflow-visible">
                  <path
                    d="M4 10 C70 3, 150 15, 210 7 S288 6, 296 11"
                    stroke="var(--accent)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.76 }}
              className="my-6 max-w-[440px] font-body text-base leading-relaxed text-white/85 md:text-lg"
            >
              Meet verified companions for activities, skills, experiences, and conversations that
              turn everyday moments into meaningful connections.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.76 }}
              className="flex flex-col items-start gap-3.5"
            >
              <Button variant="primary" icon={<ArrowRight size={18} />}>
                Start with a Hi
              </Button>
              <span className="font-body text-[15px] italic text-white/72">Book time. Not expectations.</span>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.76 }}
              className="mt-7 flex items-center gap-3"
            >
              <AvatarGroup names={['Mira', 'Rohan', 'Lena', 'Sam']} size={34} />
              <span className="max-w-[250px] font-body text-sm leading-snug text-white/85">
                <CountUp to={3200} suffix="+" /> afternoons booked near you this month.
              </span>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.76 }}
              className="mt-6 flex items-baseline gap-2 font-display text-xl font-bold tracking-[-0.01em] text-white"
            >
              <span>Meet</span>
              <RotatingWord />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
