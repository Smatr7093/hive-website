import type { Metadata } from 'next';
import { LegalLayout, Eyebrow, H2, P, UL, LI } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Child Safety Standards · Hive',
  description:
    'Hive has a zero-tolerance policy for child sexual abuse and exploitation (CSAE). Our published child safety standards, reporting mechanisms, and enforcement procedures.',
};

export default function ChildSafetyPage() {
  return (
    <LegalLayout>
      <Eyebrow>Child safety</Eyebrow>
      <h1 className="mb-2 font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-charcoal md:text-[44px]">
        Child Safety Standards
      </h1>
      <p className="mb-1 font-body text-sm text-muted-2">Last updated · August 2026</p>
      <p className="mb-6 font-body text-sm text-muted-2">
        App: Hive · Developer: Siante Technologies Private Limited
      </p>

      <P>
        These standards apply to <strong>Hive</strong>, operated by Siante Technologies Private
        Limited. They set out how Hive prohibits, detects, and responds to
        child sexual abuse and exploitation (CSAE), and how anyone can report it to us.
      </P>

      <H2>Zero tolerance for CSAE</H2>
      <P>
        <strong>
          Hive has a zero-tolerance policy for child sexual abuse and exploitation (CSAE).
        </strong>{' '}
        CSAE is strictly prohibited on Hive in every form, without exception, and regardless of
        intent, framing, or context.
      </P>
      <P>Specifically, the following are prohibited on Hive:</P>
      <UL>
        <LI>
          <strong>Child sexual abuse material (CSAM)</strong> — creating, uploading, sharing,
          requesting, linking to, or possessing any content that sexually exploits or abuses a
          child.
        </LI>
        <LI>
          <strong>Grooming</strong> — building a relationship, trust, or emotional connection with
          a child in order to sexually exploit or abuse them, including attempts to isolate a
          child from trusted adults or move a conversation off Hive.
        </LI>
        <LI>
          <strong>Sextortion</strong> — threatening to share intimate images of a child in order
          to obtain money, further images, or any other benefit.
        </LI>
        <LI>
          <strong>Sexualisation of a minor</strong> — any content, message, profile, or request
          that describes, depicts, or treats a person under 18 in a sexualised way, including
          fictional, illustrated, or AI-generated material.
        </LI>
        <LI>
          <strong>Trafficking of a child</strong> — advertising, recruiting, or facilitating the
          sexual exploitation of a child for any form of compensation.
        </LI>
        <LI>
          <strong>Solicitation of a minor</strong> — any attempt by an adult to arrange contact
          with a person under 18 for a sexual purpose, or to book or offer a session with sexual
          intent involving a minor.
        </LI>
        <LI>
          <strong>Facilitating access to CSAE</strong> — sharing links, contact details, group
          invitations, coded language, or any other means of accessing CSAE material or
          communities.
        </LI>
      </UL>
      <P>
        These prohibitions also form part of our{' '}
        <a href="/community-guidelines" className="text-accent no-underline">
          Community Guidelines
        </a>{' '}
        and{' '}
        <a href="/terms" className="text-accent no-underline">
          Terms of Service
        </a>
        , which every person who uses Hive agrees to.
      </P>

      <H2>Hive is for adults only</H2>
      <P>
        Hive is strictly for people aged 18 and over, on both sides of the platform. We verify age
        at sign-up, and every Companion completes government ID verification before they can be
        booked.
      </P>
      <P>
        If we find an account belonging to someone under 18, we remove it. If we find an adult
        attempting to contact, book, or solicit a minor, we remove them permanently and report them
        to the relevant authorities.
      </P>

      <H2>How to report</H2>
      <P>
        You can report any profile, message, or booking directly in the Hive app using the{' '}
        <strong>Report</strong> button, which appears on every profile, chat, and booking. You can
        also block anyone instantly from the same place. Reports are confidential and the person
        reported is never told who reported them.
      </P>
      <P>To report CSAE specifically, you can also contact us directly:</P>
      <UL>
        <LI>
          <strong>Child Safety point of contact:</strong>{' '}
          <a href="mailto:gethive.app01@gmail.com" className="text-accent no-underline">
            gethive.app01@gmail.com
          </a>
        </LI>
      </UL>
      <P>
        You do not need to have a Hive account to report to us, and you do not need proof. If
        something looks wrong, tell us and we will look into it.
      </P>
      <P>
        <strong>
          If a child is in immediate danger, contact the police on 112 or Childline on 1098 first.
        </strong>{' '}
        Then tell us, and we will act urgently and cooperate fully with law enforcement.
      </P>

      <H2>What we do when CSAE is reported or detected</H2>
      <P>
        Reports involving a child are treated as urgent and actioned within 24 hours of receipt.
        When we obtain actual knowledge of CSAE content or conduct on Hive, we:
      </P>
      <UL>
        <LI>Remove the content immediately</LI>
        <LI>Permanently terminate the accounts involved, and forfeit any pending payouts</LI>
        <LI>
          Preserve the content, account records, and associated data as evidence for law
          enforcement
        </LI>
        <LI>
          Report confirmed child sexual abuse material to the{' '}
          <strong>National Center for Missing &amp; Exploited Children (NCMEC)</strong>
        </LI>
        <LI>
          Report to Indian authorities, including the National Cyber Crime Reporting Portal and the
          relevant local police
        </LI>
        <LI>Block the individuals involved from creating new accounts on Hive</LI>
      </UL>
      <P>
        Accounts terminated for CSAE are not eligible for appeal or reinstatement.
      </P>

      <H2>How we work to prevent CSAE</H2>
      <UL>
        <LI>
          <strong>Age verification.</strong> 18+ only, with government ID verification for every
          Companion before they can accept a booking.
        </LI>
        <LI>
          <strong>Profile review.</strong> Every Companion profile, photo, and description is
          reviewed by a person before it goes live, and again whenever it is edited.
        </LI>
        <LI>
          <strong>Content filtering.</strong> Messages and profile content are screened
          automatically for prohibited content, including attempts to move conversations off
          platform.
        </LI>
        <LI>
          <strong>No sexual or romantic activity.</strong> Hive is strictly platonic. Sexual
          solicitation of any kind results in permanent removal, which removes an entire category
          of risk from the platform.
        </LI>
        <LI>
          <strong>Reporting on every surface.</strong> Report and block are available on every
          profile, chat, and booking.
        </LI>
        <LI>
          <strong>Human review.</strong> Reports involving a child are reviewed by a person, not
          by an automated system alone.
        </LI>
      </UL>

      <H2>Legal compliance</H2>
      <P>
        Hive complies with applicable child safety laws and regulations in the jurisdictions where
        we operate, including:
      </P>
      <UL>
        <LI>
          <strong>The Protection of Children from Sexual Offences (POCSO) Act, 2012</strong>, and
          the mandatory reporting obligations it places on us
        </LI>
        <LI>
          <strong>Section 67B of the Information Technology Act, 2000</strong>, which prohibits
          publishing or transmitting material depicting children in sexually explicit acts
        </LI>
        <LI>
          <strong>
            The Information Technology (Intermediary Guidelines and Digital Media Ethics Code)
            Rules, 2021
          </strong>
          , including our obligation to remove such content within 24 hours of a valid complaint
        </LI>
        <LI>
          Reporting of confirmed CSAM to <strong>NCMEC</strong> and to Indian law enforcement
        </LI>
      </UL>
      <P>
        We preserve records relating to removed content and terminated accounts for the periods
        required by law, and for longer where a court, regulator, or law enforcement agency
        requires it.
      </P>

      <H2>Child Safety point of contact</H2>
      <P>
        Google Play, law enforcement, child protection organisations, and members of the public can
        reach our designated child safety contact at{' '}
        <a href="mailto:gethive.app01@gmail.com" className="text-accent no-underline">
          gethive.app01@gmail.com
        </a>
        . This contact is empowered to speak to our enforcement and review procedures and to take
        action.
      </P>
      <P>
        <strong>Siante Technologies Private Limited</strong>
        <br />
        Operator of Hive
      </P>
    </LegalLayout>
  );
}
