import { useEffect } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SectionDivider from './components/SectionDivider';
import './App.css';

function App() {

  useEffect(() => {
    // Force browser to NOT keep scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>
    </div>
  );
}

export default App;
