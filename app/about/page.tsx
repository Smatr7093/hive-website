import type { Metadata } from 'next';
import { LegalLayout, Eyebrow, H2, P, UL, LI } from '@/components/legal-page';

export const metadata: Metadata = { title: 'About · Hive' };

export default function AboutPage() {
  return (
    <LegalLayout>
      <Eyebrow>About</Eyebrow>
      <h1 className="mb-5 text-balance font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-charcoal md:text-5xl">
        We&rsquo;re building a warmer way to meet people.
      </h1>
      <P>
        Hive is a small idea with a simple hope: that it should be easy to spend real, unhurried
        time with people who share what you love, over coffee, on a walk, or across a badminton
        net.
      </P>

      <H2>Why Hive exists</H2>
      <P>
        You can live in a city of ten million and still spend Sunday on your own. It&rsquo;s rarely
        that you don&rsquo;t want the company. It&rsquo;s that making the plan is its own small job:
        the texting, the where, the when, the quiet wondering whether anyone will actually show up.
        So the afternoon slips past, and you stay in.
      </P>
      <P>
        Hive takes that part off your hands. The plans are real and already set: a time, a place, a
        few people who said yes. You bring yourself; we handle the rest.
      </P>

      <H2>What we believe</H2>
      <UL>
        <LI>
          <strong>Connection without pressure.</strong> No swiping, no matches, no performance.
          Just shared time with people who want to be there.
        </LI>
        <LI>
          <strong>Book time, not expectations.</strong> Every plan begins with a clear, mutual yes,
          and nothing more is assumed.
        </LI>
        <LI>
          <strong>Honesty over polish.</strong> You show up as you are, around the things you
          genuinely enjoy, not a profile you have to maintain.
        </LI>
        <LI>
          <strong>Safe by design.</strong> Verified people, public places, and you in control of who
          you meet and when.
        </LI>
        <LI>
          <strong>The real world, not the feed.</strong> We measure success in afternoons spent
          together, never in minutes scrolled.
        </LI>
      </UL>
      <P>We think technology should hand you back your time, not compete for it.</P>

      <H2>Who&rsquo;s behind Hive</H2>
      <P>
        Hive is a product of Siante Technologies Private Limited. We&rsquo;re a team that would
        rather help you close the app and go meet someone than keep you staring at a screen, and
        we&rsquo;re building Hive to earn that trust, one good afternoon at a time.
      </P>
    </LegalLayout>
  );
}
