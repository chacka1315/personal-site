import { useState, useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import styles from './Loader.module.css';
import myPhoto from '../../assets/siaka.png';

function Loader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 4,
      ease: 'easeInOut',
      onUpdate: (v) => setPercent(Math.round(v)),
      onComplete: () => setDone(true),
    });
    return controls.stop;
  }, []);

  return (
    <motion.div
      className={styles.loader}
      animate={done ? { y: '-100%' } : { y: 0 }}
      transition={
        done ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] } : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (done) onComplete();
      }}
    >
      <img src={myPhoto} alt="Siaka" className={styles.photo} />
      <p className={styles.text}>Bienvenue dans mon univers...</p>
      <div className={styles.bar_track}>
        <div className={styles.bar_fill} style={{ width: `${percent}%` }} />
      </div>
      <span className={styles.counter}>{percent}%</span>
    </motion.div>
  );
}

export default Loader;
