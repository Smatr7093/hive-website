import type { Metadata } from 'next';
import { LegalBar, LegalFoot } from '@/components/legal-page';
import { CompanionForm } from '@/components/companion-form';

export const metadata: Metadata = { title: 'Become a Companion · Hive' };

export default function BecomeCompanionPage() {
  return (
    <div className="min-h-screen bg-bg">
      <LegalBar />
      <div className="mx-auto max-w-[560px] px-5 py-12 md:py-16">
        <div className="mb-8 text-center">
          <span className="mb-4 inline-block rounded-full bg-[var(--accent-soft)] px-3 py-1 font-body text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
            Early access
          </span>
          <h1 className="mb-3 text-balance font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-charcoal md:text-[44px]">
            Meet people worth <span className="italic text-accent">your</span> time.
          </h1>
          <p className="mx-auto max-w-[440px] text-balance font-body text-[15.5px] leading-relaxed text-muted">
            Hive connects you with companions nearby — for shared skills, interests, and experiences.
            Join the waitlist and be first in when we launch.
          </p>
        </div>
        <CompanionForm />
      </div>
      <LegalFoot />
    </div>
  );
}
