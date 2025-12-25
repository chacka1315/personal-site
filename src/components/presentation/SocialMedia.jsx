import styles from './presentation.module.css';
import { MediaCard } from '../../shared/StackIcons';
import { Discord, Instagram } from 'developer-icons';

function SocialMedia() {
  return (
    <section id="social-media">
      <h1>Réseaux sociaux</h1>
      <p>Pour ce qui est des réseaux sociaux, vous pouvez me trouver sur:</p>
      <MyMedias />
    </section>
  );
}

function MyMedias() {
  return (
    <div className={styles.medias}>
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

      <MediaCard name="Instagram" link="https://instagram/mr.billionaire1315">
        <Instagram />
      </MediaCard>
    </div>
  );
}
export default SocialMedia;
