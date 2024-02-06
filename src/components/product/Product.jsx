import React, { useEffect } from 'react';
import '../product/Product.css';
import { motion } from 'framer-motion';
import indoor from '/src/images/indoor.svg';
import outdoor from '/src/images/outdoor.svg';
import roadlights from '/src/images/roadlights.jpg';
import valueengineer from '/src/images/valueengineer.svg';
import gsap from 'gsap';

const Product = () => {
  
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
        cursor.classList.remove('aboutgrow');
        cursor.classList.remove('aboutgrow-small');
      });
      link.addEventListener('mousemove', () => {
        cursor.classList.add('aboutgrow');

        if (link.classList.contains('small')) {
          cursor.classList.remove('aboutgrow');
          cursor.classList.add('aboutgrow-small');
        }
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <div className='services-container'>
      <div className="cursor"></div>
      <div className='services-content'>
        <div className='services-banner'>
          <div className='services-text'>Product</div>
        </div>

        <div className='services-detail-container'>

          <div className='services-detail-titledes'>
            <div className='services-detail-title'>Products We Offer</div>
            <div className='info-serviceline-box'>
              <motion.div className='service-line'></motion.div>
            </div>
            <div className='services-detail-description faderedball'>Discover brilliance in every detail with our curated collection of lighting products. From elegant indoor fixtures to robust streetlight solutions, Shimmering Lights presents a spectrum of quality luminaires designed to elevate your spaces.</div>
          </div>

          <div className='product-section-wrapper'>
            <div className='product-sec-box'>
              <div className='product-sec-image'>
                <img src={indoor} className='product-cover-img' />
              </div>
              <div className='product-sec-more'>
                <div className='product-sec-title'>Indoor Lights</div>
                <div className='product-sec-description'>Indoor lighting is a fascinating realm, influencing not just the aesthetics of a space but also its functionality, mood, and even our well-being Interior/ambient lighting, task...</div>
                <div className='product-sec-knowmore'>Know more</div>
              </div>
            </div>
            <div className='product-sec-box'>
              <div className='product-sec-image'>
                <img src={outdoor} className='product-cover-img' />
              </div>
              <div className='product-sec-more'>
                <div className='product-sec-title'>Outdoor Lights</div>
                <div className='product-sec-description'>Outdoor lighting! Bringing ambiance and security to our external spaces Airports, Building sites, Farms, Industrial
                  sites and storage areas, Offshore gas and oil, Parking...</div>
                <div className='product-sec-knowmore'>Know more</div>
              </div>
            </div>
            <div className='product-sec-box'>
              <div className='product-sec-image'>
                <img src={roadlights} className='product-cover-img' />
              </div>
              <div className='product-sec-more'>
                <div className='product-sec-title'>Road Lighting</div>
                <div className='product-sec-description'>Road lighting plays a crucial role in traffic safety and creating a comfortable driving experience. To assist you
                  effectively selection of the class is based on the type off...</div>
                <div className='product-sec-knowmore'>Know more</div>
              </div>
            </div>
            <div className='product-sec-box'>
              <div className='product-sec-image'>
                <img src={valueengineer} className='product-cover-img' />
              </div>
              <div className='product-sec-more'>
                <div className='product-sec-title'>Value Engineering</div>
                <div className='product-sec-description'>Value engineering in lighting is all about optimizing your lighting solutions to achieve the best possible outcomes without sacrificing quality or functionality...</div>
                <div className='product-sec-knowmore'>Know more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product