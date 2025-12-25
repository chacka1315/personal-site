import { Phone } from 'lucide-react';
import { Gmail, WhatsApp } from 'developer-icons';
import { useTheme } from './ThemeContext';
import styles from './layout.module.css';

function NavLinks({ onLinkClick, menuIsOpen }) {
  const theme = useTheme();

  const onClick = () => {
    if (!menuIsOpen) return;
    onLinkClick();
  };

  const links = [
    { label: 'Top', href: '#intro' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Apprentissages actuels', href: '#learning' },
    { label: 'Outils', href: '#tools' },
    { label: 'Intérêts personnels', href: '#interests' },
    { label: 'Projets', href: '#projects' },
    { label: 'Réseaux sociaux', href: '#social-media' },
    { label: 'Contacts', href: '#contacts' },
    { label: 'À propos', href: '#about-me' },
  ];

  const navList = links.map((link, i) => {
    return (
      <li key={i} onClick={onClick}>
        <a href={link.href}>{link.label}</a>
      </li>
    );
  });

  return (
    <>
      <div
        onClick={onClick}
        className={styles.contacts}
        style={
          theme === 'dark'
            ? { backgroundColor: '#202127', borderColor: '#202127' }
            : { backgroundColor: '#fff' }
        }
      >
        <a href="mailto:siaka.ouatt190@gmail.com" className={styles.email_me}>
          <Gmail />
        </a>
        <a
          href="https://wa.me/2250778582891"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.wa_me}
        >
          <WhatsApp />
        </a>
        <a href="tel:+2250778582891" className={styles.call_me}>
          <Phone />
        </a>
      </div>
      <nav
        style={
          theme === 'dark'
            ? { backgroundColor: '#202127', borderColor: '#202127' }
            : { backgroundColor: '#fff' }
        }
      >
        <ul>{navList}</ul>
      </nav>
    </>
  );
}

export default NavLinks;
