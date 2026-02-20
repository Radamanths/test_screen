import { UserGroupIcon } from '../icons/FigmaIcons';

export function ReferralCard() {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        width: '362px',
        height: '126px',
        marginLeft: '14px',
        background: '#131313',
        borderRadius: '12px',
        padding: '10px 16px',
        gap: '10px',
      }}
    >
      <div className="flex flex-col items-center gap-[6px]">
        <UserGroupIcon size={28} />
        <span className="text-white font-semibold text-[14px] leading-[17px] text-center">Приглашайте друзей и получайте спины</span>
      </div>
      <span className="text-white/50 font-medium text-[12px] leading-[15px] text-center">1 приглашение = 1 спин</span>
    </div>
  );
}
