import './App.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Lenis from '@studio-freight/lenis';
import AboutUs from './components/aboutus/AboutUs';
import Services from './components/services/Services';
import Product from './components/product/Product';
import { useEffect, useState } from 'react';
import Contact from './components/contact/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    sessionStorage.setItem('activeLink', link);
  };

  useEffect(() => {
    const storedActiveLink = sessionStorage.getItem('activeLink');
    if (storedActiveLink || activeLink) {
      setActiveLink(storedActiveLink);
    } else {
      setActiveLink('home');
    }
  }, []);

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
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home activeLink={activeLink} onLinkClick={handleLinkClick} />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer activeLink={activeLink} onLinkClick={handleLinkClick} />
      </BrowserRouter>
    </>
  );
}

export default App;

