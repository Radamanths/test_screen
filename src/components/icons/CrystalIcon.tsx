interface CrystalIconProps {
  size?: number;
  className?: string;
}

export function CrystalIcon({ size = 20, className = '' }: CrystalIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L3 9L12 22L21 9L12 2Z"
        fill="url(#crystal-gradient)"
        stroke="#29B6F6"
        strokeWidth="0.5"
      />
      <path
        d="M12 2L7 9H17L12 2Z"
        fill="url(#crystal-top)"
        opacity="0.8"
      />
      <path
        d="M7 9L12 22L3 9H7Z"
        fill="#039BE5"
        opacity="0.6"
      />
      <path
        d="M17 9L12 22L21 9H17Z"
        fill="#0288D1"
        opacity="0.7"
      />
      <path
        d="M7 9H17L12 22L7 9Z"
        fill="url(#crystal-center)"
        opacity="0.9"
      />
      <defs>
        <linearGradient id="crystal-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4FC3F7" />
          <stop offset="1" stopColor="#0277BD" />
        </linearGradient>
        <linearGradient id="crystal-top" x1="12" y1="2" x2="12" y2="9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B3E5FC" />
          <stop offset="1" stopColor="#4FC3F7" />
        </linearGradient>
        <linearGradient id="crystal-center" x1="12" y1="9" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#29B6F6" />
          <stop offset="1" stopColor="#01579B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
