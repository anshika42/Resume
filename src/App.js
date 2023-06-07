import { AnimatePresence } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import Certificate from './pages/Certificate';
import Education from './pages/Education';
import Skills from './pages/Skills';

function App() {
  const location= useLocation();
  return (
    <>
     <Header/>
    <Container>    
       <AnimatePresence>
       <Routes location={location} key = {location.pathname}>
          <Route  path="/" element= {<Home/>} />
          <Route  path="/contact" element= {<Contact/>} />
          <Route  path="/about" element= {<About/>} />
          <Route  path="/projects" element= {<Projects/>} />
          <Route  path="/certificates" element= {<Certificate/>} />
          <Route  path="/education" element= {<Education/>} />
          <Route  path="/skills" element= {<Skills/>} />

        </Routes>
       </AnimatePresence>
    </Container>
    </>
  );
}

export default App;
