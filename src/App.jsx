import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Lenis from '@studio-freight/lenis';
import AboutUs from './components/aboutus/AboutUs';
import Services from './components/services/Services';
import Product from './components/product/Product';
import { useState, useEffect } from 'react';

function App() {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    // Clear the active link when the component mounts
    localStorage.removeItem('activeLink');
   
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);
  
  

  const handleLinkClick = (link) => {
    setActiveLink(link);
    // Store active link in localStorage
    localStorage.setItem('activeLink', link);
  };

  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <BrowserRouter>
        <Navbar activeLink={activeLink} onLinkClick={handleLinkClick} />
        <Routes>
          <Route path='/' element={<Home activeLink={activeLink}  onLinkClick={handleLinkClick}/>} />
          <Route path='/aboutus' Component={AboutUs} />
          <Route path='/services' Component={Services} />
          <Route path='/product' Component={Product} />
          <Route path='/contact' Component={Product} />
        </Routes>
        <Footer activeLink={activeLink} onLinkClick={handleLinkClick} />
      </BrowserRouter>
    </>
  );
}

export default App;
