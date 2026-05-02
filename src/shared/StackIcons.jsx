import styles from './shared.module.css';
import jwt from '../assets/jwt.webp';
import testinglib from '../assets/testinglib.png';
import ejsIcon from '../assets/ejs.png';
import { motion } from 'framer-motion';
import { cardItem } from './animations';

export function TechCard({ children, name }) {
  return (
    <motion.div className={styles.tech_card} variants={cardItem}>
      {children}
      <span>{name}</span>
    </motion.div>
  );
}

export function MediaCard({ children, name, link }) {
  return (
    <motion.a
      className={styles.media_card}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardItem}
    >
      {children}
      <span>{name}</span>
    </motion.a>
  );
}
// --------Frontend-----------
export function CSS() {
  return <i class="devicon-javascript-plain colored"></i>;
}

export function HTML() {
  return <i class="devicon-javascript-plain colored"></i>;
}

export function JS() {
  return <i class="devicon-javascript-plain colored"></i>;
}

export function React() {
  return <i class="devicon-react-original colored"></i>;
}

export function Vite() {
  return (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
  );
}

//----------Backend------------
export function Node() {
  return <i class="devicon-nodejs-plain colored"></i>;
}

export function Python() {
  return <i class="devicon-python-plain colored"></i>;
}

export function PHP() {
  return <i class="devicon-php-plain colored"></i>;
}

export function Passport() {
  return (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/passport/passport-original.svg" />
  );
}

//------------Tools------------
export function Jwt() {
  return <img src={jwt} alt="jsonwebtoken" />;
}

export function TestingLib() {
  return <img src={testinglib} alt="testing lib" />;
}

export function Zustand() {
  return (
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" />
  );
}

export function Windows() {
  return <i class="devicon-windows11-original colored"></i>;
}

export function EJS() {
  return <img src={ejsIcon} alt="ejs" />;
}
