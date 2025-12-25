import { Sun, Moon, Blocks } from 'lucide-react';
import styles from './layout.module.css';
import { useEffect } from 'react';
import { useTheme, useSetTheme } from './ThemeContext';
import MobileMenu from './MobileMenu';

function Header({ menuIsOpen, setMenuIsOpen }) {
  const theme = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      if (menuIsOpen) return;
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        document.body.classList.add('hide-header');
      } else {
        document.body.classList.remove('hide-header');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuIsOpen]);

  return (
    <header
      style={
        theme === 'dark'
          ? { backgroundColor: ' rgba(32, 33, 39, 0.5)' }
          : { backgroundColor: 'rgba(255, 255, 255, 0.5)' }
      }
    >
      <div className={styles.header}>
        <a href="#intro" className={styles.logo} id="logo">
          <p>siaka</p>
          <p>.d</p>
        </a>
        <div className={styles.buttons}>
          <ProjectLink />
          <DarkModeToggle />
          <MenuBtn menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        </div>
      </div>
      <MobileMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </header>
  );
}

function DarkModeToggle() {
  const theme = useTheme();
  const updateTheme = useSetTheme();

  return (
    <button className={styles['mode-toggle']} onClick={updateTheme}>
      <span className={theme === 'light' ? styles.light : styles.dark}>
        {theme === 'light' ? (
          <Sun className={styles.sun} />
        ) : (
          <Moon className={styles.moon} />
        )}
      </span>
    </button>
  );
}

function MenuBtn({ menuIsOpen, setMenuIsOpen }) {
  return (
    <div className={styles['hamburger-container']}>
      <label
        className={
          menuIsOpen
            ? `${styles['hamburger-btn']}`
            : `${styles['hamburger-btn']} ${styles['menu-is-open']}`
        }
      >
        <input
          type="checkbox"
          checked={menuIsOpen}
          className={styles['hamburger-input']}
          onChange={() => setMenuIsOpen((prev) => !prev)}
        />
      </label>
    </div>
  );
}

function ProjectLink() {
  return (
    <a href="#projects" className={styles.project_link} id="project-link">
      <Blocks />
    </a>
  );
}
export default Header;
