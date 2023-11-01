import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState, type ReactNode } from 'react';

interface Props {
  child: ReactNode;
  xSide: number;
  ySide: number;
  minusNumber?: number;
}

export const MousemoveWrapper = (props: Props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.addEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <>
      <Box
        component={motion.div}
        style={{
          transition: '.1s .3ms',
          position: 'absolute',
          x: x / props.xSide - (props?.minusNumber ?? 40),
          y: y / props.ySide - (props?.minusNumber ?? 40),
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', duration: 2 }}
      >
        {props.child}
      </Box>
    </>
  );
};
