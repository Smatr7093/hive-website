'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight, CheckCircle } from 'lucide-react';

const WEB3FORMS_KEY = 'bdfa91ce-3c91-4962-84ed-d8c2aa4ea1e9';

const INTERESTS = [
  'Shared hobbies',
  'Skill exchange',
  'Exploring the city',
  'Fitness & sports',
  'Study / work buddy',
  'Social hangouts',
  'Something else',
];

const JOINING_AS = [
  'Explorer — I want to book companions',
  'Companion — I want to host & earn',
  'Both',
];

const FREQUENCY = [
  'A few times a week',
  'About once a week',
  'A few times a month',
  'Once in a while',
];

const HEARD_FROM = [
  'Instagram',
  'Friend or word of mouth',
  'Twitter / X',
  'Google search',
  'LinkedIn',
  'Other',
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 mt-9 font-body text-[11.5px] font-bold uppercase tracking-[0.16em] text-accent first:mt-0">
      {children}
    </div>
  );
}

function Label({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <label className="mb-1.5 block font-body text-sm font-semibold text-charcoal">
      {children}
      {optional && <span className="ml-1 font-normal text-muted-2">optional</span>}
    </label>
  );
}

const inputCls =
  'w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 font-body text-[15px] text-charcoal placeholder:text-muted-2 outline-none transition focus:border-accent focus:bg-panel';

function Select({ name, placeholder, options, required }: { name: string; placeholder: string; options: string[]; required?: boolean }) {
  return (
    <div className="relative">
      <select name={name} required={required} defaultValue="" className={`${inputCls} appearance-none pr-10`}>
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown size={18} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-2" />
    </div>
  );
}

export function CompanionForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-panel p-10 text-center shadow-[var(--elevation-1)]">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-soft)]">
          <CheckCircle size={28} color="var(--accent)" />
        </div>
        <h2 className="mb-2 font-display text-2xl font-bold tracking-[-0.02em] text-charcoal">You&rsquo;re on the list!</h2>
        <p className="mx-auto max-w-[420px] font-body text-base leading-relaxed text-muted">
          Thanks for signing up. We&rsquo;ll be in touch with early access and updates as we get
          closer to launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-panel p-6 shadow-[var(--elevation-1)] md:p-9">
      {/* Web3Forms config */}
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="New Companion application — Hive" />
      <input type="hidden" name="from_name" value="Hive Companion Form" />
      {/* honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <SectionTitle>About you</SectionTitle>

      <div className="mb-4">
        <Label>Full name *</Label>
        <input name="full_name" required placeholder="Your name" className={inputCls} />
      </div>
      <div className="mb-4">
        <Label>Email *</Label>
        <input type="email" name="email" required placeholder="you@example.com" className={inputCls} />
      </div>
      <div className="mb-4">
        <Label optional>Phone</Label>
        <input type="tel" name="phone" placeholder="+91 98765 43210" className={inputCls} />
      </div>
      <div className="mb-4">
        <Label>City *</Label>
        <input name="city" required placeholder="Where are you based?" className={inputCls} />
      </div>

      <SectionTitle>How you&rsquo;ll use Hive</SectionTitle>

      <div className="mb-4">
        <Label>I&rsquo;m joining as *</Label>
        <Select name="joining_as" placeholder="Pick one" options={JOINING_AS} required />
      </div>

      <div className="mb-4">
        <label className="mb-2.5 block font-body text-sm font-semibold text-charcoal">
          What would you use Hive for? <span className="font-normal text-muted-2">pick all that apply</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((label) => (
            <label key={label} className="cursor-pointer">
              <input type="checkbox" name="interests" value={label} className="peer sr-only" />
              <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--bg)] px-3.5 py-1.5 font-body text-sm text-muted transition peer-checked:border-accent peer-checked:bg-[var(--accent-soft)] peer-checked:text-accent peer-checked:font-semibold">
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <Label>How often do you expect to use Hive?</Label>
        <Select name="frequency" placeholder="Select frequency" options={FREQUENCY} />
      </div>

      <SectionTitle>Quick feedback</SectionTitle>

      <div className="mb-4">
        <Label>How did you hear about Hive?</Label>
        <Select name="heard_from" placeholder="Select one" options={HEARD_FROM} />
      </div>
      <div className="mb-4">
        <Label>What&rsquo;s the one thing that made you sign up?</Label>
        <textarea name="signup_reason" rows={3} placeholder="Tell us what caught your attention…" className={`${inputCls} resize-y`} />
      </div>
      <div className="mb-6">
        <Label optional>Anything you&rsquo;d love to see on Hive?</Label>
        <textarea name="wishlist" rows={3} placeholder="Feature ideas, concerns, or just vibes…" className={`${inputCls} resize-y`} />
      </div>

      {status === 'error' && (
        <p className="mb-4 rounded-xl bg-[rgba(196,94,74,.1)] px-4 py-3 font-body text-sm text-danger">
          Something went wrong. Please try again, or email us at gethive.app01@gmail.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 font-body text-base font-semibold text-white transition-colors hover:bg-[#1c1a18] disabled:opacity-60"
      >
        {status === 'submitting' ? 'Submitting…' : 'Secure my spot'}
        {status !== 'submitting' && <ArrowRight size={18} />}
      </button>
      <p className="mt-3 text-center font-body text-[13px] text-muted-2">
        No spam. No selling your data. Just Hive updates.
      </p>
    </form>
  );
}
