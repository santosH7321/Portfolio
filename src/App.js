
import './App.css';
import Nav from './Components/Navigation/Nav';
import About from './Components/Page/About';
import Contact from './Components/Page/Contact';
import Footer from './Components/Page/Footer';
import Home from './Components/Page/Home';
import Projects from './Components/Page/Projects';
import Qualification from './Components/Page/Qualification';
import Skills from './Components/Page/Skills';

function App() {
  return(
    <div>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Qualification />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
