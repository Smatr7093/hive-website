'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const links = [
  { href: '#proof', label: 'What we offer' },
  { href: '#how', label: 'How it works' },
  { href: '#week', label: 'This week' },
  { href: '#safety', label: 'Trust & safety' },
  { href: '#faq', label: 'FAQ' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-[10px] z-[90] flex justify-center px-5 md:top-4">
      <div
        className={`flex h-[58px] w-full max-w-[1140px] items-center justify-between rounded-full border-[1.5px] border-beige pl-4 pr-3 backdrop-blur-xl transition-all duration-300 md:h-[66px] md:pl-[26px] md:pr-[37px] ${
          scrolled ? 'bg-white/[0.94] shadow-[0_12px_40px_rgba(44,44,44,.16)]' : 'bg-white/80 shadow-[0_6px_30px_rgba(44,44,44,.08)]'
        }`}
      >
        <Image src="/assets/logos/full_logo.svg" alt="Hive" height={24} width={90} className="h-6 md:h-[30px] w-auto pl-1.5 md:pl-0" />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-[14.5px] font-medium text-muted no-underline">
              {l.label}
            </a>
          ))}
        </nav>
        <Button variant="primary" size="sm">
          Join the Tribe
        </Button>
      </div>
    </header>
  );
}
