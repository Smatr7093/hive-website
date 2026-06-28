import type { ReactNode } from 'react';

const tones = {
  success: 'bg-success/15 text-success',
  warning: 'bg-warning/15 text-[#8a5a2e]',
  accent: 'bg-[var(--accent-soft)] text-accent',
};

export function Chip({
  children,
  tone = 'accent',
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-body text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
