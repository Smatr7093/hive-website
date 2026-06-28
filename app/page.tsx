import { SiteHeader } from '@/components/site-header';
import { Hero } from '@/components/hero';
import { Proof } from '@/components/proof';
import { HowItWorks, HowItWorksMobile } from '@/components/how-it-works';
import { ThisWeek } from '@/components/this-week';
import { TrustSafety } from '@/components/trust-safety';
import { BecomeCompanion } from '@/components/become-companion';
import { Testimonial } from '@/components/testimonial';
import { Faq } from '@/components/faq';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Proof />
        <HowItWorks />
        <HowItWorksMobile />
        <ThisWeek />
        <TrustSafety />
        <BecomeCompanion />
        <Testimonial />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
