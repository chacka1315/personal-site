import styles from './presentation.module.css';
function Intrests() {
  return (
    <section id="interests" className={styles.interests}>
      <h1>Intérêts personnels</h1>
      <p>
        Hormis la programmation, il y'a d'autres sujets sur lesquels j'aime
        passer tu temps:{' '}
      </p>
      <p>
        <span>🧘‍♂️</span>Les livres
      </p>
      <p>
        <span>🦄</span>Entrepreneuriat, Business, innovation
      </p>
      <p>
        <span>📽️</span>Les podcasts enrichissants
      </p>
      <p>
        <span>🎨</span>L'art
      </p>

      <p>
        <span>🧀</span>La nutrition
      </p>
      <p>
        <span>🧧</span>Les mangas
      </p>
    </section>
  );
}

export default Intrests;
