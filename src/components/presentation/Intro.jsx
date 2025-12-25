import CIflag from '../../assets/ci.svg';
import myPhoto from '../../assets/siaka.png';
import styles from './presentation.module.css';
import { Node, React } from '../../shared/StackIcons';

function Intro() {
  return (
    <section id="intro" className={styles.intro}>
      <img src={myPhoto} alt="my photo" />
      <p className={styles.greeting}>
        Hey, i'm <span>OUATTARA Siaka</span>!
      </p>
      <p className={styles.headline}>
        &lt;Full-stack developer focused on building complete systems, not just
        features/&gt;
      </p>
      <p>
        Développeur <b>full-stack JavaScript autodidacte</b> issu de{' '}
        <a href="https://www.theodinproject.com" target="_blank">
          The Odin Project
        </a>{' '}
        et basé a Abidjan, Côte d'Ivoire{' '}
        <img src={CIflag} alt="Ivory Coast flag" />. Je conçois des applications
        web complètes dans l'écosystème{' '}
        <span
          style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}
        >
          <span className={styles.node_icon}>
            <Node /> Node
          </span>
          <span className={styles.react_icon}>
            <React /> React
          </span>
        </span>{' '}
        avec une approche orientée compréhension des systèmes, expérience
        utilisateur et qualité du code. J'aime penser les projets dans leur
        globalité, du backend au frontend, en alliant rigueur technique et sens
        du produit.
      </p>
      <p>
        <span className={styles.available_flag}></span> Disponible pour de
        nouveaux projets, discutons-en!
      </p>
    </section>
  );
}

export default Intro;
