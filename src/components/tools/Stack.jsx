import styles from './tools.module.css';
import StackIcon from 'tech-stack-icons';
import {
  TechCard,
  Passport,
  Jwt,
  TestingLib,
  EJS,
} from '../../shared/StackIcons';
import { JavaScript, ExpressJsDark, Python, FastAPI } from 'developer-icons';
import { FlaskConicalIcon } from 'lucide-react';
import { useTheme } from '../layout/ThemeContext';

function Stack() {
  return (
    <section id="tech-stack" className={styles.tech_stack}>
      <h1>Stack</h1>
      <p>
        Certains aimerais éventuellement connaître la pile de technologie que
        j'utilise, voici une liste!
      </p>
      <h2>Les technologies que j'utilise:</h2>
      <MyTechs />
    </section>
  );
}

function MyTechs() {
  return (
    <div className={styles.techs}>
      <Core />
      <Frontend />
      <Backend />
      <Testing />
    </div>
  );
}

function Core() {
  return (
    <section>
      <h3>Core</h3>
      <div>
        <TechCard name="HTML5">
          <StackIcon name="html5" />
        </TechCard>
        <TechCard name="CSS3">
          <StackIcon name="css3" />
        </TechCard>
        <TechCard name="JavaScript">
          <JavaScript />
        </TechCard>
        <TechCard name="TypeScript">
          <StackIcon name="typescript" />
        </TechCard>
        <TechCard name="Python">
          <Python />
        </TechCard>
        <TechCard name="SQL">
          <i class="devicon-azuresqldatabase-plain colored"></i>
        </TechCard>
      </div>
    </section>
  );
}

function Frontend() {
  return (
    <section>
      <h3>Frontend</h3>
      <div>
        <TechCard name="React">
          <StackIcon name="react" />
        </TechCard>
        <TechCard name="Vite">
          <StackIcon name="vitejs" />
        </TechCard>
        <TechCard name="React router">
          <StackIcon name="reactrouter" />
        </TechCard>
      </div>
    </section>
  );
}

function Backend() {
  const theme = useTheme();
  return (
    <section>
      <h3>Backend</h3>
      <div>
        <TechCard name="Node">
          <StackIcon name="nodejs" />
        </TechCard>
        <TechCard name="Express">
          <ExpressJsDark fill="var(--svg-color)" />
        </TechCard>
        <TechCard name="FastAPI">
          <FastAPI />
        </TechCard>
        <TechCard name="PostsgreSQL">
          <StackIcon name="postgresql" />
        </TechCard>
        <TechCard name="Prisma">
          <StackIcon name="prisma" variant={theme} />
        </TechCard>
        <TechCard name="Passport">
          <Passport />
        </TechCard>
        <TechCard name="JWTs">
          <Jwt />
        </TechCard>
        <TechCard name="EJS">
          <EJS />
        </TechCard>
      </div>
    </section>
  );
}

function Testing() {
  return (
    <section>
      <h3>Testing</h3>
      <div>
        <TechCard name="Jest">
          <StackIcon name="jest" />
        </TechCard>
        <TechCard name="Vitest">
          <StackIcon name="vitest" />
        </TechCard>
        <TechCard name="Testing Library">
          <TestingLib />
        </TechCard>
        <TechCard name="Supertest">
          <FlaskConicalIcon />
        </TechCard>
      </div>
    </section>
  );
}
export default Stack;
