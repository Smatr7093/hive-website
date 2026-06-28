const PALETTE = ['#C96A3D', '#6B8E5F', '#8B7F76', '#D9955B', '#A8562F'];

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function colorFor(name: string) {
  const i = name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return PALETTE[i % PALETTE.length];
}

export function Avatar({ name, size = 34 }: { name: string; size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full font-display font-bold text-white shrink-0 ring-2 ring-white"
      style={{ width: size, height: size, fontSize: size * 0.36, background: colorFor(name) }}
      title={name}
    >
      {initials(name)}
    </div>
  );
}
