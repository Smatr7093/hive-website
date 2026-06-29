'use client';

import { Heart, Smile, CheckCircle, ArrowRight } from 'lucide-react';
import { Reveal, RevealGroup, revealItem } from './ui/reveal';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const REASONS = [
  {
    icon: Heart,
    title: 'Share what you love',
    body: 'Turn your hobbies, interests, and everyday moments into meaningful experiences.',
  },
  {
    icon: Smile,
    title: 'Meet like-minded people',
    body: 'Connect with people who genuinely want to learn, explore, or simply spend time together.',
  },
  {
    icon: CheckCircle,
    title: 'Earn on your terms',
    body: 'Set your availability, accept the requests you want, and get paid securely after every completed booking.',
  },
];

const STRIP = [
  { img: 'companion_art', alt: 'Two artists painting in a studio', title: 'Share your art.', body: 'Every masterpiece begins with a single brushstroke.', offset: true },
  { img: 'companion_pickleball', alt: 'Two friends playing pickleball', title: 'Play pickleball.', body: 'Every rally starts a conversation.' },
  { img: 'companion_coffee', alt: 'Two people in a warm coffee conversation', title: 'Host coffee conversations.', body: 'Sometimes people just need company.', offset: true },
];

export function BecomeCompanion() {
  return (
    <section id="companion" className="relative z-[2] bg-beige py-16 md:py-[84px]">
      <div className="mx-auto max-w-[1140px] px-6 md:px-11">
        <Reveal className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[0.96fr_1.04fr]">
          <div>
            <span className="eyebrow mb-4 block">For companions</span>
            <h2 className="mb-4 font-display text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-charcoal md:text-[46px]">
              Become a Companion
            </h2>
            <p className="mb-5 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-charcoal md:text-[22px]">
              Share what you enjoy. Meet people who value it.
            </p>
            <p className="mb-4 max-w-[480px] text-balance font-body text-[16.5px] leading-relaxed text-muted">
              Whether it&rsquo;s a weekend hike, a coffee conversation, teaching guitar, exploring
              your city, or simply being there for someone, your time can create meaningful
              experiences for others.
            </p>
            <p className="mb-5 max-w-[480px] text-balance font-body text-[16.5px] leading-relaxed text-muted">
              Set your availability, choose what you&rsquo;d like to offer, and decide who you&rsquo;d
              like to spend time with.
            </p>
            <div className="inline-flex items-center gap-2.5 font-display text-[17px] font-semibold text-charcoal">
              <span className="hexagon h-3 w-2.5 bg-accent" />
              You stay in control, every step of the way.
            </div>
          </div>

          <div className="rounded-3xl bg-panel p-7 shadow-[var(--elevation-1)] md:p-9">
            <h3 className="mb-5 font-display text-xl font-bold tracking-[-0.01em] text-charcoal">
              Why become a Companion?
            </h3>
            <div className="flex flex-col gap-5">
              {REASONS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)]">
                    <Icon size={18} color="var(--accent)" />
                  </span>
                  <div>
                    <div className="mb-0.5 font-display text-[17px] font-bold text-charcoal">{title}</div>
                    <p className="font-body text-[14.5px] leading-relaxed text-muted">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Button variant="primary" icon={<ArrowRight size={18} />}>
                Become a Companion
              </Button>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 flex flex-col items-start gap-6 md:flex-row">
          {STRIP.map((s) => (
            <motion.figure
              key={s.title}
              variants={revealItem}
              className={`m-0 min-w-0 flex-1 ${s.offset ? 'md:mt-7' : ''}`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[20px] bg-panel shadow-[0_22px_46px_rgba(44,44,44,.18)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/assets/photography/${s.img}.webp`} alt={s.alt} className="h-full w-full object-cover" />
              </div>
              <figcaption className="pt-4">
                <div className="flex items-center gap-2">
                  <span className="hexagon h-2.5 w-2.5 bg-accent" />
                  <span className="font-display text-[17px] font-bold text-charcoal">{s.title}</span>
                </div>
                <p className="mt-1.5 font-body text-[14.5px] leading-snug text-muted">{s.body}</p>
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
