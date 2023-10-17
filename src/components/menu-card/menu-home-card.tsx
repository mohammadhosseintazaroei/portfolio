// import "./styles.css";
import { motion, type Variants } from 'framer-motion';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export function HomeMenuCard() {
  return (
    <>
      <motion.li variants={itemVariants}>Item 1 </motion.li>
      <motion.li variants={itemVariants}>Item 2 </motion.li>
      <motion.li variants={itemVariants}>Item 3 </motion.li>
      <motion.li variants={itemVariants}>Item 4 </motion.li>
      <motion.li variants={itemVariants}>Item 5 </motion.li>
    </>
  );
}
