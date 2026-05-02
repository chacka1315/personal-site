import styles from './tools.module.css';
import StackIcon from 'tech-stack-icons';
import { TechCard } from '../../shared/StackIcons';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../shared/animations';

function FutureStack() {
  return (
    <section id="learning">
      <h1>Apprentissage actuel</h1>
      <p>
        Il y a aussi certaines technolgies que j'adore mais on ne peut tout
        apprendre d'un coup. Voici une liste non exhaustive des technologies que
        j'envisage d'apprendre!
      </p>
      <MyFutureTechs />
    </section>
  );
}

function MyFutureTechs() {
  return (
    <div className={styles.techs}>
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerContainer}>
          <TechCard name="NestJS">
            <StackIcon name="nestjs" />
          </TechCard>
          <TechCard name="Redis">
            <StackIcon name="redis" />
          </TechCard>
          <TechCard name="Kubernetes">
            <StackIcon name="kubernetes" />
          </TechCard>
          <TechCard name="Rust">
            <StackIcon name="rust" />
          </TechCard>
          <TechCard name="Go">
            <StackIcon name="go" />
          </TechCard>
        </motion.div>
      </motion.section>
    </div>
  );
}
export default FutureStack;
