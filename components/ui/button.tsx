import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-colors duration-150 whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover active:bg-accent-press',
  secondary: 'bg-white text-charcoal hover:bg-cream',
  ghost: 'bg-transparent text-charcoal hover:bg-[var(--accent-soft)]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-[52px] px-6 text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  className = '',
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  icon?: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {icon}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
      {icon}
    </button>
  );
}
