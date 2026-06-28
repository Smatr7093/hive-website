import { Reveal } from './ui/reveal';

const WORDS = ['Skills', 'Activities', 'Presence', 'Experiences'];

const ROW_1 = ['g01', 'g02', 'g03', 'g04', 'g05', 'g06', 'g07', 'g08', 'g09'];
const ROW_2 = ['g10', 'g11', 'g12', 'g13', 'g14', 'g15', 'g16', 'g17'];

function Marquee({ images, direction }: { images: string[]; direction: 'left' | 'right' }) {
  const tiles = [...images, ...images];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div
        className="marquee-track flex w-max gap-4"
        style={{
          animation: `marquee-${direction} ${direction === 'left' ? 60 : 66}s linear infinite`,
        }}
      >
        {tiles.map((name, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${name}-${i}`}
            src={`/assets/photography/${name}.png`}
            alt=""
            className="h-[166px] w-[248px] shrink-0 rounded-2xl object-cover shadow-[var(--elevation-1)]"
          />
        ))}
      </div>
    </div>
  );
}

export function Proof() {
  return (
    <section id="proof" className="relative z-[2] mx-auto max-w-[1180px] px-6 py-16 md:px-11">
      <div className="pointer-events-none absolute left-1/2 top-[120px] -z-10 h-[520px] w-[720px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(201,106,61,.10),transparent_72%)]" />

      <Reveal className="mx-auto mb-11 max-w-[660px] text-center">
        <span className="eyebrow mb-3.5">More than plans</span>
        <h2 className="my-0 mb-5 text-balance font-display text-3xl font-bold leading-tight tracking-[-0.025em] text-charcoal md:text-[42px]">
          A new way to find your Tribe
        </h2>
        <div className="mb-5 flex flex-wrap items-center justify-center gap-3.5">
          {WORDS.map((w, i) => (
            <span key={w} className="flex items-center gap-3.5">
              <span className="font-display text-xl font-bold tracking-[-0.01em] text-charcoal">{w}</span>
              {i < WORDS.length - 1 && <span className="hexagon h-2.5 w-2.5 bg-accent" />}
            </span>
          ))}
        </div>
        <p className="mx-auto max-w-[540px] text-balance font-body text-[17px] leading-relaxed text-muted">
          Whether you&rsquo;re learning, exploring, creating, or simply spending time together, Hive
          helps you find people who want to be there.
        </p>
      </Reveal>

      <div className="flex flex-col gap-4">
        <Marquee images={ROW_1} direction="left" />
        <Marquee images={ROW_2} direction="right" />
      </div>
    </section>
  );
}
