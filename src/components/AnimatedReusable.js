import React, {useRef} from 'react';
import {motion, useInView} from 'framer-motion';

const AnimatedReusable = ({children, delay = 0}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: false, margin: '-100px'});

  return (
    <motion.div
      ref={ref}
      initial={{opacity: 0, y: 50}}
      animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
      transition={{duration: 0.6, ease: 'easeOut', delay}}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedReusable;