
import { Route, Routes } from 'react-router-dom'
import './App.css';
// import Nav from './Components/Navigation/Nav';
import About from './Components/Page/About';
import Contact from './Components/Page/Contact';
import Footer from './Components/Page/Footer';
import Home from './Components/Page/Home';
import Projects from './Components/Page/Projects';
import Qualification from './Components/Page/Qualification';
import Skills from './Components/Page/Skills';
import Layout from './Components/Layout/Layout';

function App() {
  return(
    // <div>
    //     <Nav />
    //     <Home />
    //     <About />
    //     <Projects />
    //     <Skills />
    //     <Qualification />
    //     <Contact />
    //     <Footer />
    // </div>
    <Routes>

        <Route path='' element={<Layout />}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skill' element={<Skills/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/qualification' element={<Qualification/>}/>
        <Route path='/footer' element={<Footer/>}/>
    </Routes>
   
  );
}

export default App;
