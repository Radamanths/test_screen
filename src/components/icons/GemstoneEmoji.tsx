interface GemstoneEmojiProps {
  size?: number;
  className?: string;
}

/**
 * Crystal image from Figma export (image1_1_6).
 * Renders the exact 160×160 PNG crystal icon used across the design.
 */
export function GemstoneEmoji({ size = 25, className = '' }: GemstoneEmojiProps) {
  return (
    <img
      src="/crystal.png"
      alt="💎"
      width={size}
      height={size}
      className={className}
      style={{ flexShrink: 0, display: 'block' }}
      draggable={false}
    />
  );
}
