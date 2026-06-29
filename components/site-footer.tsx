import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/reveal';
import { Button } from './ui/button';

const MARQUEE = ['A coffee conversation', 'A weekend hike', 'A morning walk', 'Or a simple good company'];

const EXPLORE_LINKS = [
  { href: '#proof', label: 'What we offer' },
  { href: '#how', label: 'How it works' },
  { href: '#week', label: 'This week' },
  { href: '#companion', label: 'Become a Companion' },
];

const COMPANY_LINKS = [
  { href: '/about', label: 'About' },
  { href: '#faq', label: 'FAQs' },
];

const SUPPORT_LINKS = [
  { href: '/trust-safety', label: 'Trust & safety' },
  { href: 'mailto:gethive.app01@gmail.com', label: 'Contact us' },
  { href: '/community-guidelines', label: 'Community guidelines' },
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/refund', label: 'Refund policy' },
];

export function SiteFooter() {
  return (
    <footer className="relative z-[2] bg-transparent">
      <Reveal className="mx-auto max-w-[1180px] px-4 pt-3">
        <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden rounded-[40px] text-center shadow-[0_34px_80px_rgba(44,44,44,.24)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/photography/cta_friends_coffee.webp"
            alt="Friends sharing coffee together at home"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: 'center 18%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,26,24,.52)] via-[rgba(28,26,24,.5)] to-[rgba(28,26,24,.76)]" />
          <div className="relative max-w-[720px] px-9 py-14">
            <h2 className="mb-4 text-balance font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-white md:text-[50px]">
              Life is better when it&rsquo;s shared.
            </h2>
            <div className="mb-5 flex flex-wrap items-center justify-center gap-2.5">
              {MARQUEE.map((phrase, i) => (
                <span key={phrase} className="flex items-center gap-2.5">
                  <span className="whitespace-nowrap font-body text-sm text-white/90">{phrase}</span>
                  {i < MARQUEE.length - 1 && <span className="hexagon h-2 w-1.5 bg-accent" />}
                </span>
              ))}
            </div>
            <p className="mx-auto mb-7 max-w-[470px] text-pretty font-body text-[17.5px] leading-snug text-white/85">
              Some of life&rsquo;s best moments begin when someone simply says, &ldquo;I&rsquo;m
              in.&rdquo;
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" icon={<ArrowRight size={18} />}>
                Start with a Hi
              </Button>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-[1140px] px-6 pb-12 pt-14 md:px-11">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="max-w-[300px]">
            <Image src="/assets/logos/full_logo.svg" alt="Hive" height={28} width={100} className="h-7 w-auto" />
            <p className="my-4 max-w-[260px] font-body text-sm leading-relaxed text-muted">
              Find people nearby who share what you love, and book real time together.
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <a href="#" aria-label="Download on the App Store">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/badges/app-store-badge.svg" alt="Download on the App Store" className="h-10 w-auto" />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/badges/google-play-badge.svg" alt="Get it on Google Play" className="h-10 w-auto" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="mb-1 font-body text-[11.5px] font-bold uppercase tracking-[0.14em] text-muted-2">
              Explore
            </div>
            {EXPLORE_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="font-body text-sm text-muted no-underline">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="mb-1 font-body text-[11.5px] font-bold uppercase tracking-[0.14em] text-muted-2">
              Company
            </div>
            {COMPANY_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="font-body text-sm text-muted no-underline">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="mb-1 font-body text-[11.5px] font-bold uppercase tracking-[0.14em] text-muted-2">
              Support
            </div>
            {SUPPORT_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="font-body text-sm text-muted no-underline">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-11 flex flex-wrap items-center justify-between gap-3.5 border-t border-[var(--border)] pt-6">
          <span className="font-body text-[13px] text-muted-2">
            © 2026 Hive · Book time, not expectations
          </span>
          <div className="flex gap-5">
            {LEGAL_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="font-body text-[13px] text-muted no-underline">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
