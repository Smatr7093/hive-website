import type { Metadata } from 'next';
import { LegalLayout, Eyebrow, H2, P, UL, LI } from '@/components/legal-page';

export const metadata: Metadata = { title: 'Refund Policy · Hive' };

export default function RefundPage() {
  return (
    <LegalLayout>
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mb-2 font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-charcoal md:text-[44px]">
        Refund Policy
      </h1>
      <p className="mb-6 font-body text-sm text-muted-2">Last updated · June 2026</p>

      <H2>Acceptance of Refund Policy</H2>
      <P>
        By accessing, registering on, or using the Hive platform (&ldquo;Platform&rdquo;,
        &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you acknowledge that you have
        read, understood, and agree to be bound by this Refund Policy. This Refund Policy governs the
        conditions under which refunds may be requested, reviewed, approved, or denied for services,
        subscriptions, mentorship sessions, courses, or other offerings available through the
        Platform. If you do not agree with this Refund Policy, you should refrain from purchasing or
        subscribing to any paid services offered through the Platform.
      </P>
      <P>
        We reserve the right to modify this Refund Policy at any time to reflect changes in our
        services, business practices, or legal requirements. Any updates will become effective upon
        posting on the Platform. For material changes, we may notify registered users through email
        or in-app notifications. Continued use of the Platform or purchase of services after such
        changes constitutes acceptance of the revised Refund Policy.
      </P>

      <H2>Refund Overview</H2>
      <P>
        Hive purchases are generally non-refundable once the paid service, booking access,
        subscription access, or digital feature has been activated. However, refunds are approved in
        the situations listed in this policy, or where required under the Consumer Protection Act,
        2019 or other applicable Indian law.
      </P>
      <P>
        We are committed to a fair resolution. If a paid feature was not delivered at all, if a
        documented technical failure on our part prevented access, or if a duplicate or erroneous
        charge occurred, you are entitled to a refund review. Approved refunds are returned to the
        original payment method whenever possible. Processing timelines depend on the bank, wallet
        provider, or UPI provider involved.
      </P>

      <H2>Booking Refunds</H2>
      <P>A booking is eligible for refund review if:</P>
      <UL>
        <LI>payment was captured but the hivemate could not provide the confirmed session</LI>
        <LI>a hivemate cancels a confirmed and paid booking</LI>
        <LI>the platform cancelled the booking for operational reasons, or</LI>
        <LI>a documented technical issue prevented the session from taking place.</LI>
      </UL>
      <P>
        Bookings are generally not refundable when the member misses the session, cancels outside the
        allowed window, violates platform rules, requests prohibited services, or completes the
        session and later changes their mind.
      </P>
      <P>
        Hive does not guarantee that any booking request will be accepted, completed, or responded
        to. Booking outcomes depend on user preferences, availability, location, profile quality, and
        independent decisions of participating users.
      </P>

      <H2>Subscription Refunds</H2>
      <P>
        Subscription and membership fees are generally non-refundable after the plan becomes active.
        Subscriptions provide access to premium features, not a guarantee of bookings, matches, or
        earnings. Non-refundable scenarios include cases where a user does not receive bookings, does
        not use the account, changes their mind, or is removed for violating platform rules.
      </P>
      <P>
        Refund reviews are available for: duplicate charges, verified technical failure that
        prevented access to paid features, payment processor errors, or cases where the subscription
        feature was not delivered at all. Refunds required under the Consumer Protection Act, 2019 or
        other applicable Indian consumer law will be honoured.
      </P>

      <H2>Non-Refundable Situations</H2>
      <P>Refunds are generally not provided for:</P>
      <UL>
        <LI>off-platform payments</LI>
        <LI>cash payments</LI>
        <LI>direct bank transfers outside the checkout flow</LI>
        <LI>used digital features or credits</LI>
        <LI>completed sessions where the service was delivered</LI>
        <LI>voluntary cancellations outside the allowed window</LI>
        <LI>accounts terminated for policy violations</LI>
        <LI>attempted misuse, or</LI>
        <LI>requests connected to prohibited conduct.</LI>
      </UL>
      <P>
        Any payment made outside Hive&rsquo;s official checkout flow is at the user&rsquo;s own risk
        and is not covered by platform refund support.
      </P>
      <P>
        Nothing in this section overrides your rights under the Consumer Protection Act, 2019 or
        other applicable Indian consumer protection laws. If a paid service was genuinely not
        delivered due to a platform-side failure, you retain the right to a refund regardless of the
        categories listed above.
      </P>

      <H2>How to request a refund</H2>
      <P>
        Contact <a href="mailto:gethive.app01@gmail.com">gethive.app01@gmail.com</a> with your
        registered email, transaction ID, booking or subscription reference, payment amount, payment
        date, processor name, and a short explanation of the issue.
      </P>
      <P>
        We may ask for additional screenshots or verification. Submitting a request does not
        guarantee approval, but complete information helps us investigate faster. We aim to
        acknowledge refund requests within 48 hours and resolve them within 7 business days.
      </P>

      <H2>Processing Timeline</H2>
      <P>
        Support reviews refund requests and aims to resolve them within 7 business days of receiving
        all required information. After approval, the bank or UPI provider may take additional time
        (typically 5–10 business days) to return funds to your bank account, wallet, or UPI account.
      </P>
      <P>
        Processor delays, bank holidays, compliance checks, and dispute status can affect refund
        timing. We will keep you informed of the status via email.
      </P>

      <H2>Contact Us</H2>
      <P>If you have any questions about these Policies, please contact us:</P>
      <P>
        Hive Support Team · Email: <a href="mailto:gethive.app01@gmail.com">gethive.app01@gmail.com</a>
      </P>
      <P>We aim to respond to all inquiries within 2 business days.</P>
    </LegalLayout>
  );
}
