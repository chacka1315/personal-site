import styles from './projects.module.css';
import { SquareArrowOutUpRight } from 'lucide-react';
import { projectsData } from './data';
import { useMemo } from 'react';
import { useState } from 'react';
import { useTheme } from '../layout/ThemeContext';
import { staggerContainer, cardItem } from '../../shared/animations';
import { motion } from 'framer-motion';

function Projects() {
  const projects = useMemo(() => projectsData.getProjects(), []);
  const [hovered, setHovered] = useState(null);

  const projectList = Object.values(projects).map((project) => {
    return (
      <ProjectItem
        project={project}
        key={project.name}
        handleHover={() => setHovered(project.name)}
        handleLeave={() => setHovered(null)}
        hovered={hovered}
      />
    );
  });
  return (
    <section id="projects">
      <h1>Mes projets</h1>
      <p>
        Voici une liste des applications que j'ai eu à développer. Bien que ce
        ne soit pas une liste exhaustive, vous pouvez visiter{' '}
        <a
          href="https://github.com/chacka1315?tab=repositories"
          target="_blank"
        >
          mon repos
        </a>{' '}
        pour en voir d'autres.{' '}
        <strong>
          Notez que certains sites peuvent prendre 40 à 50 secondes à charger,
          car ils sont hébergés sur un serveur qui les met en veille en cas
          d'inactivité.
        </strong>
      </p>
      <motion.div
        className={styles.projects_list}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectList}
      </motion.div>
    </section>
  );
}

function ProjectItem({ project, handleHover, handleLeave, hovered }) {
  const theme = useTheme();

  const stackList = project.stack.map((Icon, i) => <Icon key={i} />);

  return (
    <motion.div
      className={
        hovered !== project.name
          ? `${styles.project_card}`
          : `${styles.project_card} ${styles.hovered}`
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      variants={cardItem}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <div className={styles.image}>
        <img
          src={project.imgUrl}
          alt={project.name}
          style={theme === 'dark' ? { filter: 'brightness(0.8)' } : {}}
        />
      </div>

      <h2>{project.name}</h2>
      <p className={styles.description}>{project.desc}</p>
      <div className={styles.stack}>{stackList}</div>
      <div className={styles.links}>
        <p className={styles.tag}>
          <span>#</span>
          {project.tag}
        </p>
        <a href={project.prvwUrl} target="_blank">
          <SquareArrowOutUpRight />
        </a>
        <a href={project.repoUrl} target="_blank">
          <i class="devicon-github-original"></i>
        </a>
        <p>{project.date}</p>
      </div>
    </motion.div>
  );
}

export default Projects;
