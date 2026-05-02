import styles from './tools.module.css';
import StackIcon from 'tech-stack-icons';
import { TechCard, Windows } from '../../shared/StackIcons';
import {
  ChatGPT,
  Chrome,
  ClaudeAI,
  Firefox,
  PnpmDark,
  VisualStudioCode,
} from 'developer-icons';
import { useTheme } from '../layout/ThemeContext';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../shared/animations';

function Tools() {
  return (
    <section id="tools" className={styles.tech_tools}>
      <h1>Mes outils</h1>
      <p>
        En ce qui concerne les outils que j'utilise au quotidien pour le
        développement, voivi une autre liste non exhaustive!
      </p>
      <MyTools />
    </section>
  );
}

function MyTools() {
  const theme = useTheme();
  return (
    <motion.div
      className={styles.tools}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <TechCard name="Claude Code">
        <ClaudeAI />
      </TechCard>
      <TechCard name="npm">
        <StackIcon name="npm" />
      </TechCard>
      <TechCard name="pnpm">
        <PnpmDark />
      </TechCard>
      <TechCard name="Git">
        <StackIcon name="git" />
      </TechCard>
      <TechCard name="GitHub">
        <StackIcon name="github" variant={theme} />
      </TechCard>
      <TechCard name="Render">
        <StackIcon name="render" variant={theme} />
      </TechCard>
      <TechCard name="Cloudinary">
        <StackIcon name="cloudinary" />
      </TechCard>
      <TechCard name="Vercel">
        <StackIcon name="vercel" variant={theme} />
      </TechCard>
      <TechCard name="Netlify">
        <StackIcon name="netlify2" />
      </TechCard>
      <TechCard name="Postman">
        <StackIcon name="postman" />
      </TechCard>
      <TechCard name="Eslint">
        <StackIcon name="eslint" />
      </TechCard>
      <TechCard name="Prettier">
        <StackIcon name="prettier" />
      </TechCard>
      <TechCard name="VS Code">
        <VisualStudioCode />
      </TechCard>
      <TechCard name="Windows(WSL2)">
        <Windows />
      </TechCard>
      <TechCard name="Ubuntu">
        <StackIcon name="ubuntu" />
      </TechCard>
      <TechCard name="ChatGPT">
        <ChatGPT />
      </TechCard>
      <TechCard name="Webpack">
        <StackIcon name="webpack" />
      </TechCard>
      <TechCard name="Chrome">
        <Chrome />
      </TechCard>
      <TechCard name="Firefox">
        <Firefox />
      </TechCard>
    </motion.div>
  );
}

export default Tools;
