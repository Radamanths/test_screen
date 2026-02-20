import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  StatusBar,
  Header,
  UserProfile,
  Roulette,
  StatsCard,
  SpinsCard,
  ReferralCard,
  TasksCard,
  BottomNav,
} from '../../components';
import { GemstoneEmoji } from '../../components/icons';
import { mockUser, mockPrizes, mockNavTabs, INITIAL_SPINS, TOTAL_CREDITED } from '../../mocks/data';
import type { RoulettePrize } from '../../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

// Decorative stars from Figma SVG — exact <circle> cx/cy positions
// SVG: <circle cx="X" cy="Y" r="1" fill="white"/> with opacity 0.5
const STARS = [
  { left: 160, top: 57 },
  { left: 179, top: 163 },
  { left: 222, top: 126 },
  { left: 327, top: 191 },
  { left: 44,  top: 198 },
  { left: 376, top: 378 },
  { left: 261, top: 688 },
  { left: 184, top: 700 },
  { left: 111, top: 751 },
  { left: 31,  top: 698 },
  { left: 283, top: 749 },
  { left: 349, top: 689 },
  { left: 97,  top: 665 },
];

export function CrystalsPage() {
  const [user, setUser] = useState(mockUser);
  const [spins, setSpins] = useState(INITIAL_SPINS);
  const [totalCredited, setTotalCredited] = useState(TOTAL_CREDITED);
  const [lastWin, setLastWin] = useState<RoulettePrize | null>(null);

  const handleSpin = useCallback((prize: RoulettePrize) => {
    setUser((prev) => ({ ...prev, crystals: prev.crystals + prize.amount }));
    setTotalCredited((prev) => prev + prize.amount);
    setSpins((prev) => Math.max(0, prev - 1));
    setLastWin(prize);
  }, []);

  useEffect(() => {
    if (lastWin) {
      const timer = setTimeout(() => setLastWin(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [lastWin]);

  const handleClose = useCallback(() => {
    console.log('Close pressed');
  }, []);

  return (
    <div
      className="relative flex flex-col bg-black overflow-hidden mx-auto"
      style={{ width: '390px', height: '844px' }}
    >
      {/* Decorative background stars (Group 5) — z-0 so they stay behind all content */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5, zIndex: 0 }}>
        {STARS.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{ width: '2px', height: '2px', left: `${star.left}px`, top: `${star.top}px` }}
          />
        ))}
      </div>

      {/* All content above stars */}
      <div className="relative flex flex-col w-full h-full" style={{ zIndex: 1 }}>

      <StatusBar />

      <Header onClose={handleClose} />

      <UserProfile user={user} />

      <motion.div
        className="flex flex-col"
        style={{ gap: '12px', marginTop: '39px', paddingBottom: '12px', flex: '1 1 0', minHeight: 0, overflowY: 'auto', overflowX: 'hidden' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Roulette
            prizes={mockPrizes}
            spins={spins}
            onSpin={handleSpin}
          />
        </motion.div>

        <motion.div variants={itemVariants} style={{ marginTop: '3px' }}>
          <AnimatePresence mode="wait">
            {lastWin ? (
              <motion.div
                key="win"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-center"
                style={{
                  width: '362px',
                  height: '56px',
                  marginLeft: '14px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '10px',
                  gap: '10px',
                }}
              >
                <span
                  className="text-white"
                  style={{
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '19px',
                    letterSpacing: '-0.03em',
                  }}
                >
                  Вы выиграли
                </span>
                <div className="flex items-center" style={{ gap: '8px' }}>
                  <span
                    className="text-white"
                    style={{
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '19px',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {lastWin.amount}
                  </span>
                  <GemstoneEmoji size={25} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="stats"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <StatsCard totalCredited={totalCredited} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SpinsCard spins={spins} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ReferralCard />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TasksCard />
        </motion.div>
      </motion.div>

      <div style={{ flexShrink: 0 }}>
        <BottomNav tabs={mockNavTabs} />
      </div>

      </div>{/* end content wrapper */}
    </div>
  );
}
