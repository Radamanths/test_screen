import { motion } from 'framer-motion';
import { CrystalSparkleIcon } from '../icons/FigmaIcons';

export function TasksCard() {
  return (
    <motion.div
      className="flex items-center justify-center gap-[10px] cursor-pointer"
      style={{
        width: '362px',
        height: '56px',
        marginLeft: '14px',
        background: '#131313',
        borderRadius: '16px',
        padding: '10px',
      }}
      whileTap={{ scale: 0.98 }}
    >
      <CrystalSparkleIcon size={24} />
      <span className="text-[#F0F0F0] font-semibold text-[16px] leading-[19px]">Кристаллы за задания</span>
    </motion.div>
  );
}
