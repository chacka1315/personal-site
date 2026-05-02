import styles from './presentation.module.css';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../shared/animations';

function Intrests() {
  return (
    <motion.section
      id="interests"
      className={styles.interests}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1>Intérêts personnels</h1>
      <p>
        Hormis la programmation, il y'a d'autres sujets sur lesquels j'aime
        passer tu temps:{' '}
      </p>
      <p>
        <span>🧘‍♂️</span>Les livres
      </p>
      <p>
        <span>🦄</span>Entrepreneuriat, Business, innovation
      </p>
      <p>
        <span>📽️</span>Les podcasts enrichissants
      </p>
      <p>
        <span>🎨</span>L'art
      </p>

      <p>
        <span>🧀</span>La nutrition
      </p>
      <p>
        <span>🧧</span>Les mangas
      </p>
    </motion.section>
  );
}

export default Intrests;
