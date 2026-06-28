'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const STEP_LABELS = ['01 Browse', '02 Book', '03 Meet'];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);
  const fill = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="how" className="relative z-[2] hidden h-[400vh] bg-bg md:block">
      <div ref={sectionRef} className="sticky top-0 h-screen overflow-hidden bg-[radial-gradient(900px_560px_at_18%_12%,rgba(201,106,61,.08),transparent_60%)]">
        <motion.div className="relative flex h-full w-[400vw] will-change-transform" style={{ x }}>
          {/* Panel 0 — intro */}
          <div className="flex h-full w-screen shrink-0 items-center px-[9vw]">
            <div className="max-w-[660px]">
              <span className="eyebrow mb-4 block">Simple by design</span>
              <h2 className="mb-6 text-balance font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-charcoal lg:text-[54px]">
                Finding the right company shouldn&rsquo;t be complicated
              </h2>
              <p className="max-w-[600px] text-balance font-body text-lg leading-relaxed text-muted">
                Whether you&rsquo;re looking for someone to join you on a hike, learn a new skill, or
                simply share a conversation, Hive makes it easy to go from &ldquo;I wish someone would
                join me&rdquo; to &ldquo;See you there.&rdquo;
              </p>
              <div className="mt-10 inline-flex items-center gap-3 font-body text-sm font-bold tracking-[0.04em] text-accent">
                <span className="inline-block h-[1.5px] w-[46px] bg-accent" />
                Scroll to follow the journey
              </div>
            </div>
          </div>

          {/* Panel 1 — step 1 */}
          <div className="grid h-full w-screen shrink-0 grid-cols-[0.82fr_1.18fr] items-center gap-[5vw] px-[8vw]">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-accent">
                <span className="hexagon h-2.5 w-2.5 bg-accent" />
                Step 01
              </span>
              <h3 className="mb-4 text-balance font-display text-3xl font-bold leading-tight tracking-[-0.025em] text-charcoal lg:text-[38px]">
                Find people who want the same thing.
              </h3>
              <p className="max-w-[420px] text-balance font-body text-[17.5px] leading-relaxed text-muted">
                Browse verified companions nearby. See their interests, availability, and reviews
                before deciding who feels right.
              </p>
            </div>
            <div className="flex h-[min(70vh,620px)] w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/photography/discover_filters_mock.png"
                alt="Hive Discover screen showing verified companions nearby, with filters for availability, interests, and distance"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Panel 2 — step 2 */}
          <div className="grid h-full w-screen shrink-0 grid-cols-[0.82fr_1.18fr] items-center gap-[5vw] px-[8vw]">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-accent">
                <span className="hexagon h-2.5 w-2.5 bg-accent" />
                Step 02
              </span>
              <h3 className="mb-4 text-balance font-display text-3xl font-bold leading-tight tracking-[-0.025em] text-charcoal lg:text-[38px]">
                Pick a time that works for both of you.
              </h3>
              <p className="max-w-[420px] text-balance font-body text-[17.5px] leading-relaxed text-muted">
                No endless back-and-forth. Choose a time, confirm the booking, and you&rsquo;re all
                set.
              </p>
            </div>
            <div className="flex h-[min(70vh,620px)] w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/photography/booking_flow_mock.png"
                alt="Hive booking flow: choosing a time and confirming a coffee with Ananya"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Panel 3 — step 3 (cinematic) */}
          <div className="relative flex h-full w-screen shrink-0 items-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photography/sunrise_hike.png"
              alt="Friends out living the moment"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(28,26,24,.78)] via-[rgba(28,26,24,.3)] to-transparent" />
            <div className="relative z-[8] max-w-[680px] px-[9vw] pb-[13vh]">
              <span className="mb-4 inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-[#f0c9b4]">
                <span className="hexagon h-2.5 w-2.5 bg-accent" />
                Step 03
              </span>
              <h3 className="mb-3.5 font-display text-5xl font-bold leading-none tracking-[-0.03em] text-white lg:text-[66px]">
                Meet. That&rsquo;s it.
              </h3>
              <p className="mb-4 font-display text-xl font-semibold text-white">
                No expectations. Just shared time.
              </p>
              <p className="max-w-[540px] text-balance font-body text-base leading-relaxed text-white/82">
                Whether you&rsquo;re walking, learning, cooking, exploring, or simply talking, Hive
                exists for what happens next.
              </p>
            </div>
          </div>
        </motion.div>

        {/* progress */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[rgba(44,44,44,.07)]">
          <motion.div className="h-full bg-accent" style={{ width: fill }} />
        </div>
        <div className="absolute bottom-[26px] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/72 px-4 py-2 shadow-[0_6px_24px_rgba(44,44,44,.12)] backdrop-blur-md">
          {STEP_LABELS.map((label, i) => (
            <span key={label} className="flex items-center gap-2">
              {i > 0 && <span className="text-[var(--border-2)]">·</span>}
              <span className="font-body text-[12.5px] font-bold text-muted-2">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksMobile() {
  return (
    <section className="relative z-[2] block bg-bg px-6 py-16 md:hidden">
      <span className="eyebrow mb-4 block">Simple by design</span>
      <h2 className="mb-5 text-balance font-display text-3xl font-bold leading-tight tracking-[-0.03em] text-charcoal">
        Finding the right company shouldn&rsquo;t be complicated
      </h2>
      <p className="mb-10 text-balance font-body text-base leading-relaxed text-muted">
        Whether you&rsquo;re looking for someone to join you on a hike, learn a new skill, or simply
        share a conversation, Hive makes it easy to go from &ldquo;I wish someone would join
        me&rdquo; to &ldquo;See you there.&rdquo;
      </p>

      {[
        {
          step: 'Step 01',
          title: 'Find people who want the same thing.',
          body: 'Browse verified companions nearby. See their interests, availability, and reviews before deciding who feels right.',
          img: 'discover_filters_mock',
        },
        {
          step: 'Step 02',
          title: 'Pick a time that works for both of you.',
          body: 'No endless back-and-forth. Choose a time, confirm the booking, and you’re all set.',
          img: 'booking_flow_mock',
        },
      ].map((s) => (
        <div key={s.step} className="mb-12">
          <span className="mb-3 inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-accent">
            <span className="hexagon h-2.5 w-2.5 bg-accent" />
            {s.step}
          </span>
          <h3 className="mb-3 font-display text-2xl font-bold leading-tight tracking-[-0.025em] text-charcoal">
            {s.title}
          </h3>
          <p className="mb-5 font-body text-base leading-relaxed text-muted">{s.body}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/photography/${s.img}.png`} alt="" className="w-full rounded-2xl" />
        </div>
      ))}

      <div className="relative -mx-6 overflow-hidden rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/photography/sunrise_hike.png" alt="Friends out living the moment" className="h-[60vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,26,24,.85)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="mb-3 inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-[#f0c9b4]">
            <span className="hexagon h-2.5 w-2.5 bg-accent" />
            Step 03
          </span>
          <h3 className="mb-2 font-display text-3xl font-bold leading-none tracking-[-0.03em] text-white">
            Meet. That&rsquo;s it.
          </h3>
          <p className="font-body text-base text-white/85">No expectations. Just shared time.</p>
        </div>
      </div>
    </section>
  );
}
