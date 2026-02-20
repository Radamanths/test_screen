import { GemstoneEmoji, PlusCircleIcon } from '../icons';
import type { User } from '../../types';

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="flex items-center justify-between" style={{ width: '362px', height: '46px', marginTop: '11px', marginLeft: '14px', marginRight: '14px' }}>
      {/* Left: avatar + name */}
      <div className="flex items-center gap-[12px]">
        {/* Avatar: 44x44 + 2px border = 48x48 outer, rx=11 from Figma SVG */}
        <div
          className="flex-shrink-0 overflow-hidden"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            border: '2px solid #FFFFFF',
            boxSizing: 'border-box' as const,
          }}
        >
          <img
            src="/avatar.png"
            alt={user.displayName}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name block */}
        <div className="flex flex-col gap-[2px]">
          <span className="text-white font-semibold text-[16px] leading-[19px]">{user.displayName}</span>
          <span className="text-white/50 font-medium text-[12px] leading-[15px]">{user.username}</span>
        </div>
      </div>

      {/* Right: crystal balance pill — x=247, y=108, w=129, h=46, rx=16 */}
      <div
        className="flex items-center justify-center gap-[10px] px-[10px]"
        style={{
          width: '129px',
          height: '46px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
        }}
      >
        <div className="flex items-center gap-[9px]">
          <GemstoneEmoji size={25} />
          <span className="text-white font-semibold text-[16px] leading-[19px]">{user.crystals}</span>
        </div>
        {/* Plus circle — exact SVG from Figma */}
        <button
          className="flex items-center justify-center border-none cursor-pointer bg-transparent p-0"
          style={{ width: '26px', height: '26px' }}
        >
          <PlusCircleIcon size={23} />
        </button>
      </div>
    </div>
  );
}
