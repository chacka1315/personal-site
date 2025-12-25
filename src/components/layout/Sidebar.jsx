import { useTheme } from './ThemeContext';
import styles from './layout.module.css';
import NavLinks from './NavLinks';

function Sidebar() {
  const theme = useTheme();
  return (
    <aside
      className={styles.sidebar}
      style={
        theme === 'dark'
          ? { backgroundColor: ' rgb(9, 8, 13)' }
          : { backgroundColor: 'var(--color-zinc-100)' }
      }
    >
      <NavLinks />
    </aside>
  );
}

export default Sidebar;
