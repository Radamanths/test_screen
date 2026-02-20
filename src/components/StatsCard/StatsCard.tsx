import { GemstoneEmoji } from '../icons';

interface StatsCardProps {
  totalCredited: number;
}

export function StatsCard({ totalCredited }: StatsCardProps) {
  return (
    <div
      className="flex items-center justify-center gap-[10px]"
      style={{
        width: '362px',
        height: '56px',
        marginLeft: '14px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '10px',
      }}
    >
      <span className="text-white font-semibold text-[16px] leading-[19px]">Начислено</span>
      <div className="flex items-center gap-[8px]">
        <GemstoneEmoji size={25} />
        <span className="text-white font-semibold text-[16px] leading-[19px]">{totalCredited}</span>
      </div>
    </div>
  );
}
