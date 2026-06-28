import { Avatar } from './avatar';

export function AvatarGroup({ names, size = 34 }: { names: string[]; size?: number }) {
  return (
    <div className="flex">
      {names.map((name, i) => (
        <div key={name} style={{ marginLeft: i === 0 ? 0 : -size * 0.32 }}>
          <Avatar name={name} size={size} />
        </div>
      ))}
    </div>
  );
}
