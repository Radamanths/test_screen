import { useState, useCallback, useRef } from 'react';
import type { RoulettePrize } from '../types';

interface UseRouletteOptions {
  prizes: RoulettePrize[];
  onSpinComplete?: (prize: RoulettePrize) => void;
}

interface UseRouletteReturn {
  isSpinning: boolean;
  currentOffset: number;
  winningPrize: RoulettePrize | null;
  spin: () => void;
  resetWin: () => void;
  itemWidth: number;
  gap: number;
}

const ITEM_WIDTH = 94;
const GAP = 6;
const SPIN_DURATION = 3500;
const FULL_CYCLES = 4;

export function useRoulette({ prizes, onSpinComplete }: UseRouletteOptions): UseRouletteReturn {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [winningPrize, setWinningPrize] = useState<RoulettePrize | null>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const startOffsetRef = useRef<number>(0);

  const resetWin = useCallback(() => {
    setWinningPrize(null);
  }, []);

  const spin = useCallback(() => {
    if (isSpinning || prizes.length === 0) return;

    setIsSpinning(true);
    setWinningPrize(null);

    const winIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[winIndex];

    const step = ITEM_WIDTH + GAP;
    const totalItems = prizes.length;
    const cycleLength = totalItems * step;
    const targetPosition = winIndex * step;

    // Total travel: full cycles + target position
    const totalDistance = FULL_CYCLES * cycleLength + targetPosition;

    startTimeRef.current = performance.now();
    startOffsetRef.current = 0;

    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4);
    };

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / SPIN_DURATION, 1);
      const easedProgress = easeOutQuart(progress);

      const newOffset = startOffsetRef.current + easedProgress * totalDistance;
      setCurrentOffset(newOffset);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        setWinningPrize(prize);
        onSpinComplete?.(prize);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isSpinning, prizes, onSpinComplete]);

  return {
    isSpinning,
    currentOffset,
    winningPrize,
    spin,
    resetWin,
    itemWidth: ITEM_WIDTH,
    gap: GAP,
  };
}
