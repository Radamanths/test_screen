import { useMemo, useRef, useEffect, useState } from 'react';
import { GemstoneEmoji, CrystalSparkleIcon } from '../icons';
import { useRoulette } from '../../hooks';
import type { RoulettePrize } from '../../types';

interface RouletteProps {
  prizes: RoulettePrize[];
  spins: number;
  onSpin: (prize: RoulettePrize) => void;
  disabled?: boolean;
}

const ITEM_SIZE = 94;
const ITEM_GAP = 6;

export function Roulette({ prizes, spins, onSpin, disabled = false }: RouletteProps) {
  const { isSpinning, currentOffset, spin, resetWin } = useRoulette({
    prizes,
    onSpinComplete: onSpin,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(362);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  // Repeat prizes for smooth scrolling
  const extendedPrizes = useMemo(() => {
    const repeats = 12;
    const extended: RoulettePrize[] = [];
    for (let i = 0; i < repeats; i++) {
      extended.push(...prizes);
    }
    return extended;
  }, [prizes]);

  const canSpin = spins > 0 && !isSpinning && !disabled;
  const step = ITEM_SIZE + ITEM_GAP;

  // Calculate center offset so the strip starts centered
  const centerOffset = (containerWidth - ITEM_SIZE) / 2;
  // How many items needed to fill left side of center
  const itemsBeforeCenter = Math.ceil(centerOffset / step);
  const stripLeft = centerOffset - itemsBeforeCenter * step;

  const handleSpin = () => {
    resetWin();
    spin();
  };

  // Calculate which item index is in center to apply opacity
  const centerItemIndex = Math.round(currentOffset / step) + itemsBeforeCenter;

  return (
    <div className="flex flex-col items-center gap-[8px]">
      {/* Title: crystal sparkle icon (from Figma SVG) + text */}
      <div className="flex items-center justify-center gap-[10px]" style={{ height: '24px' }}>
        <CrystalSparkleIcon size={24} />
        <span className="text-white font-semibold text-[20px] leading-[24px]">Рулетка кристаллов</span>
      </div>

      {/* Pointer triangle — exact SVG path from Figma */}
      <div className="flex justify-center" style={{ marginTop: '19px', marginBottom: '-28px', zIndex: 10 }}>
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none">
          <path d="M9.897 22.527C11.352 25.544 15.648 25.544 17.103 22.527L24.234 7.737C25.514 5.081 23.579 2 20.631 2H6.369C3.421 2 1.486 5.081 2.766 7.737L9.897 22.527Z" fill="white" />
        </svg>
      </div>

      {/* Roulette container: 362x121, bg #131313, radius 16px */}
      <div
        ref={containerRef}
        className="relative overflow-hidden mx-[14px] cursor-pointer"
        style={{
          width: '362px',
          height: '121px',
          background: '#131313',
          borderRadius: '16px',
        }}
        onClick={() => { if (canSpin) handleSpin(); }}
      >
        {/* Center vertical line — 1px white, opacity 0.2 at x=181 (center of 362) */}
        <div
          className="absolute z-[5] pointer-events-none"
          style={{
            width: '1px',
            height: '107px',
            left: '181px',
            top: '14px',
            background: '#FFFFFF',
            opacity: 0.2,
          }}
        />

        {/* Scrolling strip */}
        <div
          className="absolute flex items-center will-change-transform"
          style={{
            top: '14px',
            left: `${stripLeft}px`,
            gap: `${ITEM_GAP}px`,
            transform: `translateX(${-currentOffset}px)`,
          }}
        >
          {extendedPrizes.map((prize, index) => {
            // Calculate opacity: items far from center get 0.5
            const distFromCenter = Math.abs(index - centerItemIndex);
            const isCenter = distFromCenter <= 0.5;
            const isNear = distFromCenter <= 1.5;
            const opacity = isCenter ? 1 : isNear ? 0.7 : 0.5;

            return (
              <div
                key={`prize-${index}`}
                className="flex-shrink-0 flex flex-row items-center justify-center gap-[4px]"
                style={{
                  width: `${ITEM_SIZE}px`,
                  height: `${ITEM_SIZE}px`,
                  background: '#1E1E1E',
                  borderRadius: '16px',
                  opacity,
                  transition: 'opacity 0.15s ease',
                }}
              >
                <span className="text-white font-semibold text-[20px] leading-[24px]">{prize.amount}</span>
                <GemstoneEmoji size={25} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Spin button - hidden in static view */}
      <button
        onClick={handleSpin}
        disabled={!canSpin}
        className="border-none cursor-pointer bg-transparent p-0"
        style={{ display: 'none' }}
      >
        {isSpinning ? 'Крутится...' : `Крутить (${spins})`}
      </button>
    </div>
  );
}
