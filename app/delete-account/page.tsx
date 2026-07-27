import type { Metadata } from 'next';
import { LegalLayout, Eyebrow, H2, P, UL, LI } from '@/components/legal-page';
import { DeleteAccountForm } from '@/components/delete-account-form';

export const metadata: Metadata = {
  title: 'Delete Your Account · Hive',
  description:
    'Request deletion of your Hive account and associated data. Hive is operated by Siante Technologies Private Limited.',
};

export default function DeleteAccountPage() {
  return (
    <LegalLayout>
      <Eyebrow>Your data</Eyebrow>
      <h1 className="mb-2 font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-charcoal md:text-[44px]">
        Delete Your Account
      </h1>
      <p className="mb-1 font-body text-sm text-muted-2">Last updated · July 2026</p>
      <p className="mb-6 font-body text-sm text-muted-2">
        App: Hive · Developer: Siante Technologies Private Limited
      </p>

      <P>
        You can leave Hive whenever you want, and take your data with you when you go. This page
        explains how to delete your account, what gets deleted, and what we have to keep.
      </P>

      <H2>Delete from inside the app</H2>
      <P>The quickest way, if you still have Hive installed:</P>
      <UL>
        <LI>Open Hive and go to <strong>Profile</strong>.</LI>
        <LI>Tap <strong>Settings</strong>, then <strong>Account</strong>.</LI>
        <LI>Tap <strong>Delete account</strong> and follow the steps.</LI>
      </UL>

      <H2>Delete from here</H2>
      <P>
        If you&rsquo;ve already removed the app, or you&rsquo;d rather not sign in, fill in the form
        below. We&rsquo;ll email you to confirm the request is really yours before we delete
        anything.
      </P>
      <P>
        You can also email{' '}
        <a href="mailto:gethive.app01@gmail.com" className="text-accent no-underline">
          gethive.app01@gmail.com
        </a>{' '}
        from the address on your account, with the subject &ldquo;Delete my account&rdquo;.
      </P>

      <div className="my-8">
        <DeleteAccountForm />
      </div>

      <H2>Before you delete</H2>
      <P>A few things need to be settled first, and we&rsquo;ll help you sort them out:</P>
      <UL>
        <LI>
          <strong>Upcoming bookings.</strong> Cancel or complete anything still on your calendar, so
          the other person isn&rsquo;t left waiting.
        </LI>
        <LI>
          <strong>Money owed to you.</strong> If you&rsquo;re a Companion with a pending payout,
          we&rsquo;ll pay it out to your verified bank account before we close the account.
        </LI>
        <LI>
          <strong>An open report or dispute.</strong> If there&rsquo;s an active safety report or
          payment dispute involving your account, we&rsquo;ll finish looking into it first, then
          delete.
        </LI>
      </UL>

      <H2>What gets deleted</H2>
      <UL>
        <LI>Your profile: name, photos, bio, interests, and city.</LI>
        <LI>Your contact details: email address and phone number.</LI>
        <LI>Your messages and chat history.</LI>
        <LI>Your booking history and saved preferences.</LI>
        <LI>Reviews and ratings you&rsquo;ve written, and your saved locations.</LI>
        <LI>Your device identifiers, push tokens, and app activity data.</LI>
        <LI>For Companions: your availability, rates, and listing.</LI>
      </UL>

      <H2>What we have to keep</H2>
      <P>
        A small amount of information stays with us after your account is gone, because Indian law
        requires it. We keep only what&rsquo;s needed, and we don&rsquo;t use it for anything else.
      </P>
      <UL>
        <LI>
          <strong>Registration records — 180 days.</strong> Required under the Information Technology
          (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
        </LI>
        <LI>
          <strong>Payment and payout records — up to 8 years.</strong> Required under Indian tax,
          accounting, and financial record-keeping rules. For Companions this includes KYC, PAN, and
          bank verification records tied to payouts we&rsquo;ve already made.
        </LI>
        <LI>
          <strong>Safety and abuse records.</strong> If your account was involved in a serious safety
          report, we keep a limited record so the same person can&rsquo;t simply come back under a
          new account.
        </LI>
        <LI>
          <strong>Anything under a legal hold.</strong> Records we&rsquo;re required to preserve for
          a court, a regulator, or a law enforcement request.
        </LI>
      </UL>
      <P>
        Everything else is deleted or irreversibly anonymised. Anonymised data can&rsquo;t be linked
        back to you.
      </P>

      <H2>How long it takes</H2>
      <UL>
        <LI>We acknowledge your request within <strong>24 hours</strong>.</LI>
        <LI>
          We confirm it&rsquo;s you, then your account is closed and you&rsquo;re signed out
          everywhere.
        </LI>
        <LI>
          Your data is deleted from our systems within <strong>30 days</strong>, and from our backups
          within <strong>90 days</strong>.
        </LI>
        <LI>We email you when it&rsquo;s done.</LI>
      </UL>

      <H2>Changed your mind?</H2>
      <P>
        Reply to our confirmation email any time before the deletion goes through and we&rsquo;ll
        stop it. After that, the account is gone for good, and you&rsquo;d need to start fresh with a
        new one.
      </P>

      <H2>Questions</H2>
      <P>
        Write to us at{' '}
        <a href="mailto:gethive.app01@gmail.com" className="text-accent no-underline">
          gethive.app01@gmail.com
        </a>
        . For more on how we handle your information, see our{' '}
        <a href="/privacy" className="text-accent no-underline">
          Privacy Policy
        </a>
        .
      </P>
    </LegalLayout>
  );
}
