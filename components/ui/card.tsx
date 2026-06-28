import type { ReactNode } from 'react';

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl bg-panel shadow-[var(--elevation-1)] ${className}`}
    >
      {children}
    </div>
  );
}
