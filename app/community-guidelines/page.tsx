import type { Metadata } from 'next';
import { LegalLayout, Eyebrow, H2, P, UL, LI } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Community Guidelines · Hive' };

export default function CommunityGuidelinesPage() {
  return (
    <LegalLayout>
      <Eyebrow>Community</Eyebrow>
      <h1 className="mb-5 text-balance font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-charcoal md:text-5xl">
        Community Guidelines
      </h1>
      <P>
        Hive works because people show up with good intent. These guidelines keep it that way: a
        place where you can spend real time with someone new and feel comfortable doing it.
      </P>

      <H2>The spirit of Hive</H2>
      <P>
        Hive is for genuine, lawful, low-pressure time together, over coffee, on a walk, learning
        something, or simply talking. Treat every person you meet here the way you would a thoughtful
        new friend: with respect, honesty, and patience.
      </P>

      <H2>What we ask of you</H2>
      <UL>
        <LI><strong>Be present and respectful.</strong> Listen, be considerate, and let people be themselves.</LI>
        <LI><strong>Be honest.</strong> Use your real name and a recent photo, and describe what you actually enjoy.</LI>
        <LI><strong>Show up, or cancel early.</strong> If plans change, let the other person know in good time.</LI>
        <LI><strong>Meet in public the first time.</strong> Choose a cafe, park, or other public place for new connections.</LI>
        <LI><strong>Respect boundaries and consent.</strong> A booking is an agreement to share time, and nothing more is assumed.</LI>
        <LI><strong>Keep payments on Hive.</strong> Pay and get paid only through official Hive checkout, so you stay protected.</LI>
      </UL>

      <H2>What is never allowed</H2>
      <UL>
        <LI>Soliciting, offering, or arranging sexual services, physical intimacy, or any illegal activity.</LI>
        <LI>Harassment, abuse, threats, intimidation, stalking, or discrimination of any kind.</LI>
        <LI>Sharing or harvesting another person&rsquo;s private contact details or data without consent.</LI>
        <LI>Impersonating someone else, or creating fake or duplicate profiles.</LI>
        <LI>Posting content that is unlawful, obscene, hateful, deceptive, or otherwise objectionable.</LI>
        <LI>Using Hive for commercial spam, advertising, or off-platform payment schemes.</LI>
      </UL>

      <H2>If something feels off</H2>
      <P>
        Trust your instincts. You can leave any situation at any time. Use the in-app report and
        block tools, and reach our support team at{' '}
        <a href="mailto:gethive.app01@gmail.com">gethive.app01@gmail.com</a>. Reports are reviewed by
        real people, and we will never share that you reported someone.
      </P>

      <H2>When guidelines are broken</H2>
      <P>
        Depending on what happened, we may send a warning, temporarily limit features, or permanently
        remove an account. Serious violations may be reported to the relevant authorities. We use a
        mix of automated checks and human review to keep Hive safe, as described in our Privacy
        Policy and Terms &amp; Conditions.
      </P>
    </LegalLayout>
  );
}
