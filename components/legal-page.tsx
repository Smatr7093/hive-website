import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export function LegalBar() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--border)] bg-cream/[0.82] px-6 py-4 backdrop-blur-xl">
      <Link href="/" className="font-body text-sm font-semibold text-muted no-underline">
        ← Back to Hive
      </Link>
      <Image src="/assets/logos/full_logo.svg" alt="Hive" height={26} width={90} className="h-[26px] w-auto" />
    </div>
  );
}

export function LegalFoot() {
  return (
    <div className="mt-6 border-t border-[var(--border)] px-6 py-12 text-center">
      <Link href="/privacy" className="mx-2.5 font-body text-[13.5px] text-muted no-underline">
        Privacy
      </Link>
      <Link href="/terms" className="mx-2.5 font-body text-[13.5px] text-muted no-underline">
        Terms
      </Link>
      <Link href="/refund" className="mx-2.5 font-body text-[13.5px] text-muted no-underline">
        Refund policy
      </Link>
      <Link href="/community-guidelines" className="mx-2.5 font-body text-[13.5px] text-muted no-underline">
        Community guidelines
      </Link>
      <span className="mt-3.5 block font-body text-[13px] text-muted-2">© 2026 Hive · Book time, not expectations</span>
    </div>
  );
}

export function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <LegalBar />
      <div className="mx-auto max-w-[760px] px-6 py-16">{children}</div>
      <LegalFoot />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow mb-3.5 block">{children}</span>;
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 mb-2 font-display text-2xl font-bold tracking-[-0.01em] text-charcoal">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mb-3.5 max-w-[68ch] font-body text-base leading-relaxed text-muted">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mb-4 max-w-[68ch] list-disc pl-5">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return <li className="mb-2 font-body text-base leading-relaxed text-muted marker:text-accent">{children}</li>;
}
