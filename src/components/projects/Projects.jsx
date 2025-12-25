import styles from './projects.module.css';
import { SquareArrowOutUpRight } from 'lucide-react';
import { projectsData } from './data';
import { useMemo } from 'react';
import { useState } from 'react';
import { useTheme } from '../layout/ThemeContext';

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
        Voici une liste des applications que j'ai eu a développer. Bien que ce
        ne soit pas une liste exhaustive, vous pouvez visiter{' '}
        <a
          href="https://github.com/chacka1315?tab=repositories"
          target="_blank"
        >
          mon repos
        </a>{' '}
        pour en voir d'autres.
      </p>
      <div className={styles.projects_list}> {projectList}</div>
    </section>
  );
}

function ProjectItem({ project, handleHover, handleLeave, hovered }) {
  const theme = useTheme();

  const stackList = project.stack.map((Icon, i) => <Icon key={i} />);

  return (
    <div
      className={
        hovered !== project.name
          ? `${styles.project_card}`
          : `${styles.project_card} ${styles.hovered}`
      }
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
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
    </div>
  );
}

// function ProjectStack({stack}) {
//   const list = stack.map((s, i)=> <)
// }
export default Projects;
