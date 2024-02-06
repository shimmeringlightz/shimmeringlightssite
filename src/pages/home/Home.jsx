import React, { useEffect } from 'react';
import '../home/Home.css';
import OurInfo from '../../components/ourinfo/OurInfo';
import ProductsWeOffer from '../../components/productsweoffer/ProductsWeOffer';
import OurPassion from '../../components/ourpassion/OurPassion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Home = ({ onLinkClick }) => {
  const animation = {
    initial: { y: '100%' },
    enter: (i) => ({ y: '0%', transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  };

  const { ref } = useInView({
    threshold: 0.06,
    triggerOnce: true
  });

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorScale = document.querySelectorAll('.faderedball');

    let currentX = 0;
    let currentY = 0;
    let aimX = 0;
    let aimY = 0;

    const smoothMovement = () => {
      const diffX = aimX - currentX;
      const diffY = aimY - currentY;

      currentX += diffX * 0.1;
      currentY += diffY * 0.1;

      gsap.set(cursor, {
        left: currentX, // Adjust as needed
        top: currentY, // Adjust as needed
      });

      requestAnimationFrame(smoothMovement);
    };

    smoothMovement();

    const handleMouseMove = (e) => {
      aimX = e.clientX;
      aimY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    cursorScale.forEach((link) => {
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
      });
      link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');

        if (link.classList.contains('small')) {
          cursor.classList.remove('grow');
          cursor.classList.add('grow-small');
        }
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <>
      <div className="cursor"></div>
      <div className='home-container'>
        <div className='home-page'>
          <img className='fading-red' />
          <div className='home-content'>
            <div className='home-empty-space'></div>
            <div className='home-content-info'>
              <div ref={ref} className='home-titles'>
                <div className='home-title-1'>
                  <motion.div initial="initial" variants={animation} animate={true ? 'enter' : ''} className='home-title first-title'>Brightening Spaces</motion.div>
                </div>
                <br className='gaps' />
                <motion.div initial="initial" variants={animation} animate={true ? 'enter' : ''} className='home-title first-title'> Creating Moments</motion.div>
              </div>
              <div className='home-description small'>a world where lighting is an art form, a story telling <br className='gaps' /> medium, and a key player in sustainable design.</div>
              <Link to='product' onClick={() => onLinkClick('product')} className='explore-product-link'>
                <motion.div whileHover={{ scale: 1.1 }} className='home-explore-btn'>
                  Explore Products
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
        <OurInfo />
        <ProductsWeOffer />
        <OurPassion />
      </div>
    </>
  )
}

export default Home;
