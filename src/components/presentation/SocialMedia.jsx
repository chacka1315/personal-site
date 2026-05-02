import styles from './presentation.module.css';
import { MediaCard } from '../../shared/StackIcons';
import { Discord, Instagram } from 'developer-icons';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../shared/animations';

function SocialMedia() {
  return (
    <motion.section
      id="social-media"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1>Réseaux sociaux</h1>
      <p>Pour ce qui est des réseaux sociaux, vous pouvez me trouver sur:</p>
      <MyMedias />
    </motion.section>
  );
}

function MyMedias() {
  return (
    <motion.div className={styles.medias} variants={staggerContainer}>
      <MediaCard name="GitHub" link="https://github.com/chacka1315">
        <i class="devicon-github-original"></i>
      </MediaCard>
      <MediaCard name="X/Twitter" link="https://x.com/chacool1315">
        <i class="devicon-twitter-original"></i>
      </MediaCard>
      <MediaCard
        name="Facebook"
        link="https://facebook.com/siaka.ouattara.37480"
      >
        <i class="devicon-facebook-plain colored"></i>
      </MediaCard>
      <MediaCard
        name="Linkedin"
        link="https://www.linkedin.com/in/siaka-ouattara-b032b9360"
      >
        <i class="devicon-linkedin-plain colored"></i>
      </MediaCard>
      <MediaCard name="mr.morale99" link="https://discord.com">
        <Discord />
      </MediaCard>

      <MediaCard
        name="Instagram"
        link="https://www.instagram.com/mr.billionaire1315?igsh=MTlvZGU3d2J6MGV2aw=="
      >
        <Instagram />
      </MediaCard>
    </motion.div>
  );
}
export default SocialMedia;
