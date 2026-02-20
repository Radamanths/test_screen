import { GiftIcon } from '../icons/FigmaIcons';

interface SpinsCardProps {
  spins: number;
}

export function SpinsCard({ spins }: SpinsCardProps) {
  return (
    <div
      className="flex items-center justify-between"
      style={{
        width: '365px',
        height: '55px',
        marginLeft: '11px',
        background: '#131313',
        borderRadius: '12px',
        padding: '10px 16px',
      }}
    >
      <span className="text-white/50 font-semibold text-[14px] leading-[17px]">Ваши спины</span>
      <div className="flex items-center gap-[4px]">
        <span className="text-white/90 font-semibold text-[14px] leading-[17px]">{spins}</span>
        <GiftIcon size={16} />
      </div>
    </div>
  );
}
