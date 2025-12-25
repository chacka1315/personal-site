import { useTheme } from './ThemeContext';
import styles from './layout.module.css';
import NavLinks from './NavLinks';
import { useEffect } from 'react';
import { useRef } from 'react';

function MobileMenu({ menuIsOpen, setMenuIsOpen }) {
  const theme = useTheme();
  const menuRef = useRef(null);
  return (
    <aside
      ref={menuRef}
      className={
        menuIsOpen
          ? `${styles['mobile-menu']} ${styles['show-mobile-menu']}`
          : `${styles['hide-mobile-menu']}`
      }
      style={
        theme === 'dark'
          ? { backgroundColor: ' rgba(9, 8, 13, 0.8)' }
          : { backgroundColor: ' rgba(0, 0, 0, 0.3)' }
      }
    >
      <NavLinks
        onLinkClick={() => setMenuIsOpen(false)}
        menuIsOpen={menuIsOpen}
      />
    </aside>
  );
}

export default MobileMenu;
