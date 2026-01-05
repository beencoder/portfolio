import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default');
  const [cursorLabel, setCursorLabel] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 25, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const canShowCursor = window.matchMedia('(pointer: fine)').matches;
    setIsDesktop(canShowCursor);

    if (!canShowCursor) return;

    const moveCursor = (e) => {
      if (!isVisible) setIsVisible(true);

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      const isClickable = e.target.closest('a, button, [data-clickable]');

      if (target) {
        setCursorType('label');
        setCursorLabel(target.getAttribute('data-cursor-label') || '');
      } else if (isClickable) {
        setCursorType('hover');
        setCursorLabel('');
      } else {
        setCursorType('default');
        setCursorLabel('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="cursor-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 9999,
      }}>
      {/* 원형 커서 */}
      <motion.div
        animate={{
          scale: cursorType === 'label' ? 0 : cursorType === 'hover' ? 2 : 1,
          opacity: cursorType === 'label' ? 0 : 0.5,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        style={{
          position: 'absolute',
          width: '24px',
          height: '24px',
          backgroundColor: '#7b6953',
          borderRadius: '50%',
          mixBlendMode: 'difference',
        }}
      />
      {/* 라벨 커서 */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          opacity: cursorType === 'label' ? 1 : 0,
          y: cursorType === 'label' ? 46 : 0,
          scale: cursorType === 'label' ? 1 : 0.8,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 150 }}
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px 12px',
          fontSize: '16px',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          color: '#fdfaf5',
          backgroundColor: '#564a3c',
          borderRadius: '20px',
        }}>
        {cursorLabel}
      </motion.div>
    </motion.div>
  );
}
