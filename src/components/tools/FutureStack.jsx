import styles from './tools.module.css';
import StackIcon from 'tech-stack-icons';
import { TechCard } from '../../shared/StackIcons';

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
      <section>
        <div>
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
        </div>
      </section>
    </div>
  );
}
export default FutureStack;
