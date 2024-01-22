import React from 'react';
import '../home/Home.css';
import OurInfo from '../../components/ourinfo/OurInfo';
import ProductsWeOffer from '../../components/productsweoffer/ProductsWeOffer';
import OurPassion from '../../components/ourpassion/OurPassion';
import Footer from '../../components/footer/Footer';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';




const Home = () => {

  const animation = {
    initial: { y: '100%' },
    enter: i => ({ y: '0%', transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView } = useInView({
    threshold: 0.06,
    triggerOnce: true
  })

  return (
    <>
    <div className='home-container'>
    <div className='home-page'>
       <img className='fading-red'/>
        <div className='home-content'>
         <div className='home-empty-space'></div>
           <div className='home-content-info'>

              <div ref={ref} className='home-titles'>
                <div className='home-title-1'>
                <motion.div initial="initial" variants={animation} animate={useInView ? 'enter' : ''} className='home-title first-title'>Brightening Spaces</motion.div>
                </div>
                <br className='gaps' />
                <motion.div initial="initial" variants={animation} animate={useInView ? 'enter' : ''} className='home-title first-title'> Creating Moments</motion.div>
              </div>

            <div className='home-description'>a world where lighting is an art form, a story telling <br className='gaps'/> medium, and a key player in sustainable design.</div>
            <motion.div whileHover={{scale:1.1}} className='home-explore-btn'>Explore Products</motion.div>
           </div>
          
        </div>
    </div>
    <OurInfo/>
    <ProductsWeOffer/>
    <OurPassion/>
   
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Home