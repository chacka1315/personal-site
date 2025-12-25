import styles from './presentation.module.css';
import { Phone } from 'lucide-react';
import { Gmail, WhatsApp } from 'developer-icons';

function Contacts() {
  return (
    <section id="contacts">
      <h1>Contact</h1>
      <p>Je suis joingnable à tout moment sur:</p>
      <div className={styles.contacts}>
        <a href="mailto:siaka.ouatt190@gmail.com">
          <Gmail />
          siaka.ouatt190@gmail.com
        </a>
        <a href="mailto:chacka1315@gmail.com">
          <Gmail />
          chacka1315@gmail.com
        </a>
        <a
          href="https://wa.me/2250778582891"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp />
          +225 07 785 828 91
        </a>
        <p>
          <Phone color="#44b744" />
          +225 07 785 828 91
        </p>
      </div>
    </section>
  );
}

export default Contacts;
