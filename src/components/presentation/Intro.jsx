import myPhoto from '../../assets/siaka.png';
import styles from './presentation.module.css';
import { JS, Python, PHP } from '../../shared/StackIcons';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../shared/animations';

function Intro() {
  return (
    <motion.section
      id="intro"
      className={styles.intro}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.img src={myPhoto} alt="my photo" variants={fadeInUp} />
      <motion.p className={styles.greeting} variants={fadeInUp}>
        Hey, i'm <span>OUATTARA Siaka</span>!
      </motion.p>
      <motion.p className={styles.headline} variants={fadeInUp}>
        &lt;Full-stack developer focused on building complete systems, not just
        features/&gt;
      </motion.p>
      <motion.p variants={fadeInUp}>
        Développeur <b>full-stack autodidacte</b> basé à Abidjan, Côte d'Ivoire.
        Je conçois des applications web complètes dans l'écosystème{' '}
        <span
          style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}
        >
          <span className={styles.js_icon}>
            <JS /> JavaScript
          </span>
          <span className={styles.python_icon}>
            <Python /> Python
          </span>
          <span className={styles.php_icon}>
            <PHP /> php
          </span>
        </span>{' '}
        avec une approche orientée compréhension des systèmes, expérience
        utilisateur et qualité du code. J'aime penser les projets dans leur
        globalité, du backend au frontend, en alliant rigueur technique et sens
        du produit.
      </motion.p>
      <motion.p variants={fadeInUp}>
        <span className={styles.available_flag}></span> Disponible pour de
        nouveaux projets, discutons-en!
      </motion.p>
    </motion.section>
  );
}

export default Intro;
