import { Reveal } from './ui/reveal';
import { Avatar } from './ui/avatar';
import { Chip } from './ui/chip';

const TICKETS = [
  {
    rotate: -2.5,
    img: 'coffee_convo',
    badge: '2 seats left',
    tone: 'warning' as const,
    time: 'Sat · 10:00am',
    title: 'Slow coffee, nothing to prove',
    place: 'A quiet neighbourhood roastery',
    host: 'Nadia K',
    note: 'Nadia’s table always runs long. That’s the point.',
  },
  {
    rotate: 1.5,
    img: 'morning_jog',
    badge: 'Beginners welcome',
    tone: 'success' as const,
    time: 'Sun · 6:30am',
    title: 'The easy morning loop',
    place: 'The city park · main gate',
    host: 'Rohan M',
    note: 'Rohan’s pace: talkable, never breathless.',
    raised: true,
  },
  {
    rotate: -1,
    img: 'two_girls_play_badminton',
    badge: 'New',
    tone: 'accent' as const,
    time: 'Thu · 7:00pm',
    title: 'After-work badminton',
    place: 'Indoor courts nearby',
    host: 'Mei L',
    note: 'Mei’s got spare racquets. Just bring shoes.',
  },
];

export function ThisWeek() {
  return (
    <section id="week" className="relative z-[2] mx-auto max-w-[1160px] px-6 py-16 md:px-11">
      <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="eyebrow">This week near you</span>
          <h2 className="mt-3 font-display text-[34px] font-bold tracking-[-0.02em] text-charcoal">
            A few afternoons worth showing up for
          </h2>
        </div>
        <a href="#" className="font-body text-[15px] font-bold text-accent no-underline">
          See everything on →
        </a>
      </Reveal>

      <Reveal className="flex flex-wrap items-start justify-center gap-7">
        {TICKETS.map((t) => (
          <div
            key={t.title}
            className="group w-[312px] overflow-hidden rounded-lg bg-white shadow-[0_16px_40px_rgba(44,44,44,.13)] transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_28px_62px_rgba(44,44,44,.22)]"
            style={{ transform: `rotate(${t.rotate}deg)`, marginTop: t.raised ? 30 : 0 }}
          >
            <div className="relative h-[188px] bg-beige">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/assets/photography/${t.img}.webp`} alt="" className="h-full w-full object-cover" />
              <div className="absolute left-3 top-3">
                <Chip tone={t.tone}>{t.badge}</Chip>
              </div>
            </div>
            <div className="p-[18px] pb-5">
              <div className="mb-1.5 font-body text-xs font-bold uppercase tracking-[0.06em] text-accent">
                {t.time}
              </div>
              <h3 className="mb-1 font-display text-xl font-bold text-charcoal">{t.title}</h3>
              <p className="mb-4 font-body text-sm text-muted">{t.place}</p>
              <div className="flex items-center gap-2.5 border-t border-dashed border-[var(--border-2)] pt-3.5">
                <Avatar name={t.host} size={30} />
                <span className="font-body text-[13.5px] text-muted">{t.note}</span>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
