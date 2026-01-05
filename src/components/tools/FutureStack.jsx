import styles from './tools.module.css';
import StackIcon from 'tech-stack-icons';
import { TechCard, Zustand } from '../../shared/StackIcons';
import { NextJs, Python } from 'developer-icons';
import { useTheme } from '../layout/ThemeContext';
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
  const theme = useTheme();
  return (
    <div className={styles.techs}>
      <section>
        <div>
          <TechCard name="NestJS">
            <StackIcon name="nestjs" />
          </TechCard>
          <TechCard name="Redis">
            <StackIcon name="redis" />
          </TechCard>
          <TechCard name="Docker">
            <StackIcon name="docker" />
          </TechCard>
          <TechCard name="TanStack Query">
            <StackIcon name="reactquery" />
          </TechCard>
          <TechCard name="Zustand">
            <Zustand />
          </TechCard>
          <TechCard name="Tailwind">
            <StackIcon name="tailwindcss" />
          </TechCard>
          <TechCard name="Shadcn/ui">
            <StackIcon name="shadcnui" variant={theme} />
          </TechCard>
          <TechCard name="NextJS">
            <NextJs />
          </TechCard>
          <TechCard name="MongoDB">
            <StackIcon name="mongodb" />
          </TechCard>
        </div>
      </section>
    </div>
  );
}
export default FutureStack;
