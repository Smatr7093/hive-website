import { Reveal } from './ui/reveal';
import { Avatar } from './ui/avatar';

export function Testimonial() {
  return (
    <section
      id="story"
      className="relative z-[2] mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-11 lg:grid-cols-[0.92fr_1.08fr]"
    >
      <Reveal>
        <div
          className="rounded-[4px] bg-white p-3.5 pb-0 shadow-[0_18px_46px_rgba(44,44,44,.16)]"
          style={{ transform: 'rotate(-2deg)' }}
        >
          <div className="aspect-[5/4] w-full overflow-hidden rounded-[3px] bg-beige">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photography/uncle_dog_walk.png"
              alt="Two friends on a morning walk"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-1 py-3 font-body text-[13px] text-muted">
            sunday walk crew · city park
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.12}>
        <span className="eyebrow block">One real Sunday</span>
        <p className="mt-4 text-pretty font-display text-2xl font-semibold leading-snug tracking-[-0.01em] text-charcoal md:text-[27px]">
          &ldquo;I moved here for a job in November and knew exactly nobody. Now there&rsquo;s a
          Sunday walking crew that texts me if I don&rsquo;t show up, even when it&rsquo;s
          pouring.&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Avatar name="Aditya R" size={42} />
          <div>
            <div className="font-body text-[15px] font-bold text-charcoal">Aditya R.</div>
            <div className="font-body text-[13px] text-muted-2">Joined Hive in March</div>
          </div>
        </div>
        <div className="mt-4 font-body text-[13.5px] italic text-muted">
          p.s. the dog&rsquo;s name is Biscuit, and yes, he counts as a member.
        </div>
      </Reveal>
    </section>
  );
}
