import type { Metadata } from 'next';
import { LegalLayout, Eyebrow, H2, P, UL, LI } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Terms & Conditions · Hive' };

export default function TermsPage() {
  return (
    <LegalLayout>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mb-2 font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-charcoal md:text-[44px]">
        Terms &amp; Conditions
      </h1>
      <p className="mb-6 font-body text-sm text-muted-2">Last updated · June 2026</p>

      <H2>Acceptance of Terms</H2>
      <P>
        By accessing, registering on, or using the Hive (product of Siante Technologies) platform
        (&ldquo;Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you agree
        to be bound by these Terms &amp; Conditions (&ldquo;Terms&rdquo;). These Terms constitute a
        legally binding agreement between you (&ldquo;User&rdquo;, &ldquo;you&rdquo;) and Hivemate.
        If you do not agree to these Terms in their entirety, you must immediately discontinue use of
        the Platform.
      </P>
      <P>
        We reserve the right to modify these Terms at any time. Continued use of the Platform after
        changes are posted constitutes acceptance of the revised Terms. We will notify registered
        users of material changes via in-app notification or email.
      </P>

      <H2>User Accounts and Registration</H2>
      <P>To access most features of the Platform, you must create a registered account. You agree to:</P>
      <UL>
        <LI>Provide accurate, truthful, and complete information during registration and keep your profile information up to date.</LI>
        <LI>Maintain the confidentiality of your account credentials, including your password. You are solely responsible for all activity that occurs under your account.</LI>
        <LI>
          Notify us immediately at{' '}
          <a href="mailto:gethive.app01@gmail.com">gethive.app01@gmail.com</a> if you suspect
          unauthorized access to your account.
        </LI>
        <LI>Not share your account with any other person or create multiple accounts.</LI>
        <LI>Not impersonate any person or entity, or misrepresent your affiliation with any person or entity.</LI>
        <LI>We reserve the right to suspend or terminate your account if you provide false information or violate these Terms.</LI>
      </UL>

      <H2>Prohibited Content</H2>
      <P>You agree that you will not engage in any of the following prohibited activities:</P>
      <UL>
        <LI>Soliciting, offering, negotiating, or arranging any form of sexual services, physical intimacy, or illegal activity through the Platform or any communication channel connected to it.</LI>
        <LI>Harassing, abusing, threatening, intimidating, or stalking any other user.</LI>
        <LI>Posting, uploading, or transmitting content that is unlawful, obscene, pornographic, defamatory, discriminatory, or otherwise objectionable.</LI>
        <LI>Sharing or soliciting personal contact information (phone numbers, social media handles, email addresses) in public profile fields or early chat interactions in a manner intended to circumvent the Platform.</LI>
        <LI>Impersonating another person, organization, or entity.</LI>
        <LI>Using the Platform for any commercial purposes other than those explicitly permitted, including advertising third-party services.</LI>
        <LI>Attempting to gain unauthorized access to any part of the Platform or another user&rsquo;s account.</LI>
        <LI>Collecting or harvesting personal data of other users without their explicit consent.</LI>
        <LI>Using automated tools, bots, scripts, or scrapers to access the Platform.</LI>
        <LI>Engaging in any conduct that disrupts the normal operation of the Platform or places an unreasonable load on our infrastructure.</LI>
        <LI>Circumventing, disabling, or interfering with any security or access-control features of the Platform.</LI>
        <LI>Posting misleading, fraudulent, or deceptive content, including false profile information or fake reviews.</LI>
      </UL>
      <P>
        Violation of any of the above may result in immediate account suspension or permanent
        termination, legal action, and reporting to relevant authorities.
      </P>

      <H2>User Content</H2>
      <P>
        You retain ownership of content you create and upload to the Platform (&ldquo;User
        Content&rdquo;), including profile photographs, bio text, and messages. By submitting User
        Content, you grant Hive a non-exclusive, worldwide, royalty-free license to use, store,
        display, reproduce, and distribute your User Content solely for the purpose of operating and
        promoting the Platform. This license continues for as long as your account is active and
        terminates when your User Content is deleted from the Platform, except where retention is
        required for legal compliance, fraud prevention, or ongoing dispute resolution.
      </P>
      <P>You represent and warrant that:</P>
      <UL>
        <LI>You own or have the necessary rights and permissions to all User Content you submit.</LI>
        <LI>Your User Content does not violate the intellectual property rights, privacy rights, or any other rights of any third party.</LI>
        <LI>Your User Content complies with these Terms and all applicable laws.</LI>
        <LI>We reserve the right (but are not obligated) to review, edit, or remove any User Content that violates these Terms or our community guidelines, at our sole discretion and without prior notice.</LI>
      </UL>

      <H2>Intellectual Property</H2>
      <P>
        All content, design, code, trademarks, logos, and materials on the Platform (excluding User
        Content) are the exclusive property of Hive or its licensors (Siante Technologies Private
        Limited) and are protected by applicable intellectual property laws. You are granted a
        limited, non-exclusive, non-transferable, revocable license to access and use the Platform
        solely for your personal, non-commercial use in accordance with these Terms.
      </P>
      <P>
        You may not copy, modify, distribute, sell, sublicense, reverse-engineer, or create
        derivative works of any part of the Platform without our prior written consent.
      </P>

      <H2>Community Guidelines</H2>
      <P>
        To maintain a safe and respectful community, all Hivemates must adhere to our community
        guidelines. Our Platform employs both automated and human content moderation to review
        messages and profile content for violations.
      </P>
      <P>Violations of community guidelines may result in:</P>
      <UL>
        <LI>An automated warning message being sent to the offending user.</LI>
        <LI>Temporary suspension of messaging or other features.</LI>
        <LI>Permanent account termination.</LI>
        <LI>Reporting to relevant authorities for serious violations.</LI>
      </UL>
      <P>
        You acknowledge and consent to the monitoring of your communications on the Platform for the
        purposes of safety, fraud prevention, content moderation, and enforcement of these Terms.
        This monitoring is conducted using both automated systems (including keyword filters and
        AI-based content analysis) and human review where necessary. Our content moderation practices
        are described in our Privacy Policy.
      </P>

      <H2>Bookings and session</H2>
      <P>Hive facilitates bookings between you and Hivemates for social activities. The following terms apply to all bookings:</P>
      <P>
        <strong>No guarantee of bookings or sessions:</strong> Hive does not guarantee that any
        booking request will be accepted, completed, or responded to. Booking outcomes depend on
        user preferences, availability, location, profile quality, and independent decisions of
        participating users. Hivemates have the right to decline any booking request at their
        discretion without providing a reason.
      </P>
      <P>
        Bookings are agreements directly between you and the Hivemate. Hive acts solely as a
        technology intermediary and is not a party to these agreements. Hive is not liable for the
        conduct, actions, availability, or quality of service of any Hivemate.
      </P>
      <P>You are responsible for ensuring that the activity you book is lawful and consistent with these Terms.</P>
      <P>
        Completed sessions are non-refundable unless there is documented non-performance by the
        Hivemate, a verified technical failure on the platform&rsquo;s part, or a refund is otherwise
        required under applicable Indian law.
      </P>
      <P>
        <strong>Cancellations:</strong> If a Hivemate cancels a confirmed and paid booking, the
        payment will be refunded to your original payment method or wallet. If you cancel a
        confirmed booking after payment, cancellation and refund eligibility is governed by the
        cancellation window shown during booking.
      </P>
      <P>
        <strong>Disputes:</strong> Any disputes arising from a booking should first be attempted to
        be resolved between the parties. You may contact our support team at{' '}
        <a href="mailto:gethive.app01@gmail.com">gethive.app01@gmail.com</a> if direct resolution is
        not possible. We will review disputes and take appropriate action, which may include refund,
        credit, or other resolution.
      </P>
      <P>
        Hive operates a payout system for Hivemates. Hivemate earnings are subject to our platform
        commission, as disclosed on our pricing page.
      </P>

      <H2>Disclaimer</H2>
      <P>
        The Platform and all Services are provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis without any warranties of any kind, either express or implied,
        including but not limited to:
      </P>
      <UL>
        <LI>Warranties of merchantability, fitness for a particular purpose, or non-infringement.</LI>
        <LI>Guarantees that the Platform will be uninterrupted, error-free, or secure.</LI>
        <LI>Guarantees regarding the accuracy, reliability, or completeness of any information on the Platform.</LI>
        <LI>Guarantees as to the character, conduct, identity, intentions, or actions of any user or Hivemate.</LI>
      </UL>
      <P>
        Hive does not conduct background checks on all users, though we do require KYC verification.
        Your safety during in-person meetups is your own responsibility. We strongly recommend
        meeting in public places for the first time and taking appropriate personal safety
        precautions.
      </P>

      <H2>Limitation of liability</H2>
      <P>
        To the maximum extent permitted by applicable law, Hive, its directors, officers, employees,
        and affiliates shall not be liable for any indirect, incidental, special, consequential, or
        punitive damages, including loss of profits, data, goodwill, or other intangible losses,
        arising out of or in connection with:
      </P>
      <UL>
        <LI>Your use of or inability to use the Platform or Services.</LI>
        <LI>Any conduct or content of any third party on the Platform.</LI>
        <LI>Any content obtained from the Platform.</LI>
        <LI>Unauthorized access, use, or alteration of your transmissions or data.</LI>
      </UL>
      <P>
        In any event, our total aggregate liability to you for all claims arising from your use of
        the Platform shall not exceed the total amount paid by you to Hive in the six (6) months
        preceding the event giving rise to the claim.
      </P>
      <P>
        Nothing in these Terms shall limit liability for fraud, willful misconduct, or any liability
        that cannot be excluded or limited by applicable law.
      </P>

      <H2>Indemnification</H2>
      <P>
        You agree to defend, indemnify, and hold harmless Hivemate and its directors, officers,
        employees, licensors, and agents from and against any and all claims, damages, obligations,
        losses, liabilities, costs, and expenses (including reasonable legal fees) arising from:
      </P>
      <UL>
        <LI>Your use of the Platform or Services.</LI>
        <LI>Your violation of these Terms.</LI>
        <LI>Your violation of any third-party rights, including intellectual property or privacy rights.</LI>
        <LI>Any User Content you submit to the Platform.</LI>
        <LI>Your interaction with any other user, including any in-person meetings.</LI>
      </UL>

      <H2>Account Termination and Deletion</H2>
      <P>
        You may delete your account at any time through the account settings. Upon deletion, your
        profile will be removed from public view and your personal data will be deleted in
        accordance with our Privacy Policy.
      </P>
      <P>We reserve the right to suspend or permanently terminate your account, with or without notice, for:</P>
      <UL>
        <LI>Violation of these Terms or our community guidelines.</LI>
        <LI>Fraudulent, abusive, or illegal activity.</LI>
        <LI>Creating a risk of legal liability for Hivemate.</LI>
      </UL>
      <P>
        If your account is terminated for cause (violation of Terms, fraud, or illegal activity),
        unused subscription time or credits are generally not refundable. This does not override any
        rights you may have under the Consumer Protection Act, 2019 or other applicable Indian law
        where the termination is disputed in good faith.
      </P>
      <P>A record of the deletion (email, name, deletion date, and reason) is retained for administrative reference.</P>

      <H2>Governing Law and Dispute resolution</H2>
      <P>
        These Terms are governed by and construed in accordance with the laws of India, without
        regard to its conflict-of-law provisions.
      </P>
      <P>
        For any disputes arising out of or in connection with these Terms or your use of the
        Platform, you agree to first attempt to resolve the dispute informally by contacting our
        support team at <a href="mailto:gethive.app01@gmail.com">gethive.app01@gmail.com</a>. We will
        make good-faith efforts to resolve the matter within 30 days.
      </P>
      <P>
        If informal resolution is not achieved, the dispute shall be submitted to binding arbitration
        under the Arbitration and Conciliation Act, 1996 (as amended). The seat of arbitration shall
        be Hyderabad, Telangana, India. Proceedings shall be conducted in English.
      </P>
      <P>
        Notwithstanding the above, either party may seek emergency injunctive relief from a competent
        court to prevent irreparable harm. Nothing in this arbitration clause restricts your right to
        file a complaint with the appropriate Consumer Disputes Redressal Commission under the
        Consumer Protection Act, 2019, or to approach any other forum or authority available to you
        under applicable Indian law.
      </P>

      <H2>Severity and Entire Agreement</H2>
      <P>
        If any provision of these Terms is found by a court of competent jurisdiction to be invalid,
        illegal, or unenforceable, that provision will be limited or eliminated to the minimum extent
        necessary, and the remaining provisions will continue in full force and effect.
      </P>
      <P>
        These Terms, together with our Privacy Policy, Payment Policy, and Refund &amp; Cancellation
        Policy, constitute the entire agreement between you and Hivemate regarding your use of the
        Platform and supersede all prior understandings, agreements, or representations, whether oral
        or written. In the event of any conflict between these Terms and a specific policy document,
        these Terms shall prevail unless the specific policy explicitly states otherwise.
      </P>

      <H2>Contact Us</H2>
      <P>If you have any questions about these Terms, please contact us:</P>
      <P>
        Hive Support Team · Email: <a href="mailto:gethive.app01@gmail.com">gethive.app01@gmail.com</a>
      </P>
      <P>We aim to respond to all inquiries within 2 business days.</P>
    </LegalLayout>
  );
}
