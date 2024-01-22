import React,{useRef} from 'react';
import '../ourinfo/OurInfo.css';
import demo from '/src/images/lamp.svg';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScroll } from 'framer-motion';

const OurInfo = () => {
    const svgStyle = {
        width: '516px',
        height: '360px',
        position: 'relative',
      };
    
      const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: '0',
        left: '0',
        
      };

      const { scrollYProgress } = useScroll()

      const {ref,inView} = useInView({
        threshold:0.06,
        triggerOnce:true
      })

      const animation = {
        initial : {y:"150%"},
        enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
      }

    return (
        <div  className='our-info-container'>
            <div ref={ref}  className='our-info-contents'>
                <motion.div  variants={animation} initial="initial" animate={inView ? "enter" : ""}   className='info-title'>Transformative Lighting Solutions, Illuminating Every Space with Timeless Elegance</motion.div>

                <div className='info-wrapper-box'>
                <div className='info-line-box'>
                    <motion.div style={{ scaleX: scrollYProgress  }}  className='info-line'></motion.div>
                </div>
                <motion.div className='info-description'>Providing uniform, well-balanced illumination. Aspects of the building architecture and the interior design, who believe that illumination is more than just bulbs and circuits. It's about evoking emotions, creating atmosphere, and guiding the eye like a skilled storyteller.</motion.div>
                <div className='info-products-container'>
                    <div className='info-products-left'>
                        <div className='design-product-box'>

                            <div className='design-product-image'>


                                <div className='svg-container'>
                    
                                            <img className='immo' src={demo} x="0" y="0" width="516" height="360" />

                                    <div className='design-intro-title'>
                                      <div>  Design</div>
                                    </div>

                                    <div className='explore-design-circle'>
                                        <svg className='explore-arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.75 10H30V26.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                </div>
                              

                            </div>
                            <div className='design-product-des'>
                                Primary guideline for lighting professionals, architects, and engineers, ensuring optimal lighting conditions for occupants while adhering to energy efficiency and sustainability principles.
                            </div>
                        </div>
                    </div>
                    <div className='info-products-right'>

                        <motion.div  whileHover={{scale:1.03}} className='info-product-item'>

                            <div className='info-product-title'>Engineering</div>
                            <div className='info-product-des'>Renowned software for professional lighting design in buildings. Offers accurate lighting calculations, energy analysis, and realistic visualizations.</div>
                            <motion.div whileHover={{scale:1.2}} className='explore-circle'>
                                <svg  className='explore-arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.75 10H30V26.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </motion.div>

                        </motion.div>

                        <motion.div  whileHover={{scale:1.03}} className='info-product-item'>
                            <div className='info-product-title'>Supply</div>
                            <div className='info-product-des'>Project stage helps gauge lead times and potential rush options & meeting the desired delivery dates in line with the project requirement & meeting client expectation.</div>
                            <motion.div  whileHover={{scale:1.2}} className='explore-circle'>
                                <svg className='explore-arrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.75 10H30V26.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
                </div>


               
            </div>
        </div>
    )
}

export default OurInfo