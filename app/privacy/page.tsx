import type { Metadata } from 'next';
import { LegalLayout, Eyebrow, H2, P, UL, LI } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Privacy Policy · Hive' };

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mb-2 font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-charcoal md:text-[44px]">
        Privacy Policy
      </h1>
      <p className="mb-1 font-body text-sm text-muted-2">Last updated · June 2026</p>
      <p className="mb-6 font-body text-sm text-muted-2">
        Company: Siante Technologies Private Limited · Product: Hive
      </p>

      <H2>1. About This Policy</H2>
      <P>
        Hive (Product of Siante Technologies) (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the
        Platform&rdquo;) is a Companion or activity booking platform registered and operating in
        India.
      </P>
      <P>
        This Privacy Policy explains how Hive, a product of Siante Technologies Private Limited,
        collects, uses, stores, shares, and protects information relating to Hivemates, Explorers,
        and Members using the Hive Platform.
      </P>
      <P>
        By registering an account or visiting the website or using our Services, you acknowledge
        that you have read and understood this Privacy Policy and consent to the practices
        described herein. If you do not agree, please discontinue use of the Platform.
      </P>
      <P>
        We process your personal data in accordance with the Information Technology Act, 2000, the
        Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal
        Data or Information) Rules, 2011, the Digital Personal Data Protection Act, 2023 (to the
        extent notified and in force), and other applicable Indian laws and regulations.
      </P>

      <H2>2. Nature of the Platform</H2>
      <P>
        Hive is strictly an activity booking platform. It connects consenting adults for lawful
        social activities, including but not limited to café hopping, conversations, shopping,
        cycling, and travel.
      </P>
      <P>
        This Platform does not facilitate, promote, advertise, or condone any form of sexual
        services, physical intimacy, escort services, or any activity that is illegal under any
        applicable law. Any attempt to use the Platform for such purposes constitutes a material
        violation of these terms, will result in immediate account termination, and may be reported
        to relevant law enforcement authorities.
      </P>

      <H2>3. Information We Collect</H2>
      <P>We collect the following categories of information:</P>
      <UL>
        <LI><strong>Account Information:</strong> Full name, email address, phone number, date of birth, gender, and password.</LI>
        <LI><strong>Profile Information:</strong> Profile photographs, bio, listed skills and activities, availability, and session rates voluntarily provided by you.</LI>
        <LI><strong>Identity Verification Data:</strong> Government-issued identity documents for KYC verification purposes. This data is processed solely for fraud prevention, age verification, and preventing duplicate accounts, stored with industry-standard encryption, and deleted when you delete your account.</LI>
        <LI><strong>Usage Data:</strong> Pages visited, features used, session duration, device type, browser type, operating system, IP address, and referral source.</LI>
        <LI><strong>Communication Data:</strong> Content of messages exchanged through the Platform&rsquo;s chat system (subject to our content moderation policy), booking requests, and support correspondence.</LI>
        <LI><strong>Payment Information:</strong> Transaction identifiers, payment method type, billing amount, payment status, UTR/reference numbers, optional payment proof screenshots, and manual UPI verification notes. Full bank credentials are never stored on our servers; pay only through the official Hive checkout payment gateway.</LI>
        <LI><strong>Subscription Data:</strong> Plan type, purchase history, and subscription status.</LI>
        <LI><strong>Location Data:</strong> Approximate location inferred from your IP address. We do not collect precise GPS location unless you explicitly grant permission.</LI>
        <LI><strong>Device and Technical Data:</strong> Push notification tokens, device identifiers, and app usage analytics.</LI>
      </UL>

      <H2>4. How We Use Your Information</H2>
      <UL>
        <LI><strong>To provide and operate the Platform:</strong> Creating and managing your account, enabling bookings and messaging, processing payments, and delivering the features you access.</LI>
        <LI><strong>Identity and age verification:</strong> Confirming that users are adults (18 years or older) and that profiles are genuine, using KYC documents.</LI>
        <LI><strong>Safety and fraud prevention:</strong> Detecting, investigating, and preventing fraudulent, abusive, or illegal activity on the Platform.</LI>
        <LI><strong>Content moderation:</strong> Automatically and manually reviewing messages, media, and profile content to enforce our community guidelines and prevent prohibited conduct, including keyword-based text filtering and AI-based content analysis. Flagged content may be reviewed by authorized team members.</LI>
        <LI><strong>Communications:</strong> Sending transactional emails (booking confirmations, payment receipts), service updates, security alerts, and, where you have opted in, promotional notifications.</LI>
        <LI><strong>Platform improvement:</strong> Analyzing usage patterns, troubleshooting technical issues, and developing new features.</LI>
        <LI><strong>Legal compliance:</strong> Meeting obligations imposed by Indian law, court orders, or regulatory authorities, and enforcing our Terms &amp; Conditions.</LI>
        <LI><strong>Customer support:</strong> Responding to your queries, resolving disputes, and providing technical assistance.</LI>
      </UL>

      <H2>5. Data Sharing and Disclosure</H2>
      <P>
        We do not sell, rent, or trade your personal data to third parties for marketing purposes.
        We may share your information only in the following circumstances:
      </P>
      <UL>
        <LI><strong>With Hivemates:</strong> Your public profile information (name, profile photos, bio, activities, ratings) is visible to registered Hivemates browsing the Platform. Your contact details are never publicly displayed.</LI>
        <LI><strong>With service providers:</strong> We engage third-party vendors who assist us in operating the Platform, including manual payment verification support, cloud hosting, email delivery, push notifications, and analytics. These vendors are contractually obligated to protect your data.</LI>
        <LI><strong>For legal purposes:</strong> We may disclose your information if required by law, regulation, court order, or government authority, or to protect rights, property, or safety.</LI>
        <LI><strong>In business transfers:</strong> In the event of a merger, acquisition, restructuring, or sale of assets, your data may be transferred as part of that transaction. We will notify you before your data becomes subject to a different privacy policy.</LI>
        <LI><strong>With your consent:</strong> We may share your data in other circumstances with your explicit prior consent.</LI>
      </UL>

      <H2>6. Data Retention</H2>
      <P>We retain your personal data for as long as your account is active or as necessary to provide the Services.</P>
      <P>
        <strong>Account deletion by user:</strong> If you delete your account through account
        settings, we will delete or anonymize your personal data within 30 days, except where we
        are required to retain it by applicable law, or where retention is necessary for fraud
        prevention, security investigations, or unresolved disputes.
      </P>
      <P>
        <strong>Deletion record:</strong> When an account is deleted, we retain a limited
        administrative record containing your email address, name, account type, last active date,
        and the date and reason for deletion, retained for accounting, fraud prevention, and
        regulatory compliance purposes. It does not include your profile content, chat history,
        media, or any other personal data.
      </P>
      <P>
        Message content exchanged through the Platform may be retained for a period necessary to
        comply with our legal obligations and to investigate reported violations. Anonymized and
        aggregated data that cannot reasonably identify you may be retained indefinitely for
        analytical purposes.
      </P>

      <H2>7. Your Rights and Choices</H2>
      <P>Subject to applicable law, you have the following rights with respect to your personal data:</P>
      <UL>
        <LI><strong>Access:</strong> You may request a copy of the personal data we hold about you.</LI>
        <LI><strong>Correction:</strong> You may request that we correct inaccurate or incomplete personal data. You can update most profile information directly from your account settings.</LI>
        <LI><strong>Deletion:</strong> You may request deletion of your account and personal data through the account deletion feature in your profile settings or by contacting our support team.</LI>
      </UL>
      <P>
        To exercise any of these rights, contact us at{' '}
        <a href="mailto:gethive.app01@gmail.com">gethive.app01@gmail.com</a>. We will respond
        within 30 days. We may need to verify your identity before processing your request.
      </P>

      <H2>8. Cookies and Tracking Technologies</H2>
      <P>
        Hive may use cookies, authentication tools, analytics technologies, and similar tracking
        mechanisms to improve functionality, security, and performance.
      </P>

      <H2>9. Data Security</H2>
      <P>
        Hive implements commercially reasonable administrative, technical, and organizational
        safeguards including encryption, access controls, secure infrastructure, monitoring, and
        security reviews. However, no method of electronic transmission or storage is 100% secure.
        While we strive to use commercially acceptable means to protect your information, we cannot
        guarantee absolute security. You are responsible for maintaining the confidentiality of
        your account credentials.
      </P>

      <H2>10. Children&rsquo;s Privacy</H2>
      <P>
        Hive is intended only for individuals aged 18 years or older. Accounts identified as
        belonging to minors may be suspended or removed.
      </P>

      <H2>11. Third-Party Links</H2>
      <P>
        The Platform may contain links to external websites or services not operated by us. We
        have no control over the content, privacy practices, or policies of those third-party
        sites. We recommend reviewing the privacy policy of any third-party site you visit. Our
        Privacy Policy applies solely to information collected by the Platform.
      </P>

      <H2>12. Changes to This Policy</H2>
      <P>
        We may update this Privacy Policy from time to time to reflect changes in our practices,
        technology, legal requirements, or other factors. When we make material changes, we will
        notify you by posting the updated policy on this page and, where appropriate, sending an
        in-app or email notification. Your continued use of the Platform after such changes
        constitutes your acceptance of the updated policy.
      </P>

      <H2>13. Grievance Officer</H2>
      <P>
        Grievance Officer: Sudarshan Reddy · Email:{' '}
        <a href="mailto:gethive.app01@gmail.com">gethive.app01@gmail.com</a> · Company: Siante
        Technologies Private Limited
      </P>

      <H2>Additional Hive-Specific Clauses</H2>
      <UL>
        <LI>Companions are independent users and are not employees, agents, contractors, or representatives of Siante Technologies Private Limited.</LI>
        <LI>Hive strongly recommends first-time meetings occur in public locations.</LI>
        <LI>Hive prohibits use of the platform for dating, escort services, sexual services, adult services, or unlawful activities.</LI>
        <LI>Hive may suspend, restrict, investigate, or terminate accounts involved in fraud, abuse, impersonation, harassment, safety risks, or policy violations.</LI>
      </UL>
    </LegalLayout>
  );
}
