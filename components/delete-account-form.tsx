'use client';

import { useState } from 'react';
import { ChevronDown, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

const WEB3FORMS_KEY = 'bdfa91ce-3c91-4962-84ed-d8c2aa4ea1e9';

const ACCOUNT_TYPE = [
  'Explorer — I book companions',
  'Companion — I host and get paid',
  'Both',
  'Not sure',
];

const REASONS = [
  'I no longer need Hive',
  'I have a privacy concern',
  'I had a bad experience',
  'I want to start over with a new account',
  'Something else',
];

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

function Select({
  name,
  placeholder,
  options,
  required,
}: {
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="relative">
      <select name={name} required={required} defaultValue="" className={`${inputCls} appearance-none pr-10`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown size={18} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-2" />
    </div>
  );
}

export function DeleteAccountForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [confirmed, setConfirmed] = useState(false);

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
      <div id="request-form" className="rounded-3xl bg-panel p-10 text-center shadow-[var(--elevation-1)]">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-soft)]">
          <CheckCircle size={28} color="var(--accent)" />
        </div>
        <h2 className="mb-2 font-display text-2xl font-bold tracking-[-0.02em] text-charcoal">
          Request received
        </h2>
        <p className="mx-auto max-w-[460px] font-body text-base leading-relaxed text-muted">
          We&rsquo;ll email you within 24 hours to confirm it&rsquo;s really you. Once you confirm,
          your account and data are deleted within 30 days. If you change your mind before then,
          just reply to that email.
        </p>
      </div>
    );
  }

  return (
    <form
      id="request-form"
      onSubmit={handleSubmit}
      className="scroll-mt-24 rounded-3xl bg-panel p-6 shadow-[var(--elevation-1)] md:p-9"
    >
      {/* Web3Forms config */}
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="Account deletion request — Hive" />
      <input type="hidden" name="from_name" value="Hive Account Deletion" />
      {/* honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mb-4">
        <Label>Email on your Hive account *</Label>
        <input type="email" name="email" required placeholder="you@example.com" className={inputCls} />
      </div>

      <div className="mb-4">
        <Label>Phone number on your Hive account *</Label>
        <input type="tel" name="phone" required placeholder="+91 98765 43210" className={inputCls} />
        <p className="mt-1.5 font-body text-[13px] text-muted-2">
          We use this to check the request is coming from you, and nothing else.
        </p>
      </div>

      <div className="mb-4">
        <Label>You use Hive as *</Label>
        <Select name="account_type" placeholder="Pick one" options={ACCOUNT_TYPE} required />
      </div>

      <div className="mb-4">
        <Label optional>Why are you leaving?</Label>
        <Select name="reason" placeholder="Select one" options={REASONS} />
      </div>

      <div className="mb-6">
        <Label optional>Anything you&rsquo;d like us to know</Label>
        <textarea
          name="notes"
          rows={3}
          placeholder="We read every one of these."
          className={`${inputCls} resize-y`}
        />
      </div>

      <div className="mb-6 rounded-2xl border border-[rgba(196,94,74,.25)] bg-[rgba(196,94,74,.06)] p-4">
        <div className="mb-2.5 flex items-center gap-2">
          <AlertTriangle size={17} color="var(--color-danger)" />
          <span className="font-body text-sm font-bold text-danger">This can&rsquo;t be undone</span>
        </div>
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            type="checkbox"
            name="confirmed"
            value="yes"
            required
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-danger)]"
          />
          <span className="font-body text-sm leading-relaxed text-muted">
            I understand my Hive account and my data will be permanently deleted, that I can&rsquo;t
            get my bookings, messages, or reviews back, and that some records are kept where the law
            requires it.
          </span>
        </label>
      </div>

      {status === 'error' && (
        <p className="mb-4 rounded-xl bg-[rgba(196,94,74,.1)] px-4 py-3 font-body text-sm text-danger">
          Something went wrong. Please try again, or email us at gethive.app01@gmail.com with the
          subject &ldquo;Delete my account&rdquo;.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting' || !confirmed}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 font-body text-base font-semibold text-white transition-colors hover:bg-[#1c1a18] disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Request account deletion'}
        {status !== 'submitting' && <ArrowRight size={18} />}
      </button>
      <p className="mt-3 text-center font-body text-[13px] text-muted-2">
        We&rsquo;ll confirm it&rsquo;s you before anything is deleted.
      </p>
    </form>
  );
}
