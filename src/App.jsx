import Header from './components/layout/Header';
import Intro from './components/presentation/Intro';
import About from './components/presentation/About';
import Sidebar from './components/layout/Sidebar';
import Intrests from './components/presentation/Interests';
import SocialMedia from './components/presentation/SocialMedia';
import Projects from './components/projects/Projects';
import Stack from './components/tools/Stack';
import Tools from './components/tools/Tools';
import Contacts from './components/presentation/Contacts';
import FutureStack from './components/tools/FutureStack';
import Footer from './components/layout/Footer';
import ThemProvider from './components/layout/ThemeProvider';
import MobileMenu from './components/layout/MobileMenu';
import { useState } from 'react';

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <ThemProvider>
      <div className="web-page">
        <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <Sidebar />
        <main style={menuIsOpen ? { pointerEvents: 'none' } : {}}>
          <Content />
        </main>
        <Footer />
      </div>
    </ThemProvider>
  );
}

function Content() {
  return (
    <div className="main">
      <div className="content">
        <Intro />
        <Stack />
        <FutureStack />
        <Tools />
        <Intrests />
        <Projects />
        <SocialMedia />
        <Contacts />
        <About />
      </div>
    </div>
  );
}
export default App;
