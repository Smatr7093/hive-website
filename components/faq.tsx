'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Reveal } from './ui/reveal';
import { Button } from './ui/button';

const FAQS = [
  {
    q: 'Is Hive a dating app?',
    a: 'No. Hive is a companionship platform built around shared activities, skills, experiences, and conversations. Whether you’re looking for a hiking partner, someone to practise guitar with, or simply a coffee companion, every interaction begins with a shared intention, not romantic expectations.',
  },
  {
    q: 'Who can become a Companion?',
    a: 'Anyone with a genuine interest in sharing their time, skills, or hobbies can apply. Every Companion goes through a verification process before accepting bookings on Hive.',
  },
  {
    q: 'How do I choose the right Companion?',
    a: 'Every profile includes interests, experience, availability, ratings, and reviews to help you make an informed choice. You decide who you’d like to spend time with.',
  },
  {
    q: 'Is it safe to meet someone through Hive?',
    a: 'Safety is built into every step. Verified profiles, transparent information, secure payments, community guidelines, and reporting tools help create a trusted experience for everyone.',
  },
  {
    q: 'What kinds of activities can I book?',
    a: 'Hive is designed for everyday human connection. From morning walks, hiking, yoga, and pickleball to painting, language practice, coffee conversations, reading sessions, cooking together, and exploring your city, there’s something for every interest.',
  },
  {
    q: 'Can I offer more than one activity or skill?',
    a: 'Absolutely. Many Companions enjoy sharing multiple interests. You can create offerings across activities, skills, experiences, and presence-based sessions.',
  },
  {
    q: 'How do payments work?',
    a: 'Payments are made securely through Hive. Once a session is successfully completed, the Companion receives their payout according to the platform’s payout process.',
  },
  {
    q: 'What if I need to cancel?',
    a: 'Plans can change. Hive provides a clear cancellation policy so both Members and Companions know what to expect before confirming a booking.',
  },
  {
    q: 'Do I have to talk the whole time?',
    a: 'Not at all. Some connections are built through conversation, while others happen in comfortable silence. Whether you’re reading together, walking, or simply sharing a coffee, every experience is guided by mutual comfort and respect.',
  },
  {
    q: 'What makes Hive different?',
    a: 'Most platforms help you find people online. Hive helps you spend meaningful time together in the real world, through shared interests, shared experiences, and genuine human connection.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--border)]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-5 bg-transparent py-[23px] text-left"
      >
        <span className="font-display text-lg font-bold tracking-[-0.01em] text-charcoal">{q}</span>
        <ChevronDown
          size={20}
          color="var(--accent)"
          className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <p className="max-w-[680px] text-pretty pb-6 pr-10 font-body text-[15.5px] leading-relaxed text-muted">
          {a}
        </p>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative z-[2] mx-auto max-w-[1140px] px-6 py-16 md:px-11">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.74fr_1.26fr]">
        <Reveal className="lg:sticky lg:top-24">
          <span className="eyebrow mb-3.5 block">FAQ</span>
          <h2 className="mb-7 text-balance font-display text-[32px] font-bold leading-tight tracking-[-0.025em] text-charcoal md:text-[38px]">
            Frequently asked questions
          </h2>
          <div className="rounded-[20px] bg-panel p-6 shadow-[var(--elevation-1)]">
            <div className="mb-1 font-display text-[19px] font-bold text-charcoal">Still curious?</div>
            <p className="mb-4 font-body text-[14.5px] leading-relaxed text-muted">We&rsquo;re happy to help.</p>
            <a href="mailto:gethive.app01@gmail.com" className="inline-block no-underline">
              <Button variant="secondary" icon={<ArrowRight size={18} />}>
                Contact us
              </Button>
            </a>
          </div>
        </Reveal>

        <div className="border-t border-[var(--border)]">
          {FAQS.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
