'use client';

import { Shield, Eye, Sliders, MessageCircle, Check } from 'lucide-react';
import { Reveal, RevealGroup, revealItem } from './ui/reveal';
import { motion } from 'motion/react';

const CARDS = [
  {
    icon: Shield,
    title: 'Verified people',
    body: 'Every companion completes identity verification before they can accept bookings.',
  },
  {
    icon: Eye,
    title: 'Transparent profiles',
    body: 'See interests, experience, availability, and reviews before you decide to spend time together.',
  },
  {
    icon: Sliders,
    title: 'You’re in control',
    body: 'Choose who you meet, when, and what you do. Every booking begins with a mutual yes.',
  },
  {
    icon: MessageCircle,
    title: 'Support when you need it',
    body: 'From reporting concerns to dedicated help, real people are here at every step.',
  },
];

const INDICATORS = [
  'Identity verified companions',
  'Secure payments',
  'Report & support tools',
  'Mutual booking confirmation',
];

export function TrustSafety() {
  return (
    <section id="safety" className="relative z-[2] mx-auto max-w-[1080px] px-6 py-16 md:px-11">
      <Reveal className="mx-auto mb-12 max-w-[640px] text-center">
        <span className="eyebrow mb-3.5 block">Designed for peace of mind</span>
        <h2 className="mb-5 text-balance font-display text-3xl font-bold leading-tight tracking-[-0.025em] text-charcoal md:text-[42px]">
          Trust begins before you meet.
        </h2>
        <p className="mx-auto max-w-[560px] text-balance font-body text-[17px] leading-relaxed text-muted">
          Meaningful connections are built on trust. That&rsquo;s why every interaction on Hive is
          designed with safety, transparency, and respect at its core, so you can focus on the
          experience, not the uncertainty.
        </p>
      </Reveal>

      <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map(({ icon: Icon, title, body }) => (
          <motion.div
            key={title}
            variants={revealItem}
            className="rounded-[20px] bg-panel p-6 shadow-[var(--elevation-1)] transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[var(--elevation-2)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[var(--accent-soft)]">
              <Icon size={20} color="var(--accent)" />
            </div>
            <h3 className="mb-2 font-display text-[19px] font-bold tracking-[-0.01em] text-charcoal">
              {title}
            </h3>
            <p className="font-body text-[14.5px] leading-relaxed text-muted">{body}</p>
          </motion.div>
        ))}
      </RevealGroup>

      <Reveal className="mx-auto mt-16 max-w-[1040px] text-center">
        <p className="mb-7 text-balance font-display text-2xl font-bold leading-snug tracking-[-0.02em] text-charcoal md:text-[33px]">
          Safe enough to trust. <span className="text-accent">Human enough to enjoy.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {INDICATORS.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-panel px-3 py-1.5 font-body text-xs font-semibold text-muted"
            >
              <Check size={14} color="var(--success)" />
              {label}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
