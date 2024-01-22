import React from 'react';
import '../productsweoffer/ProductsWeOffer.css';
import interiorlights from '/src/images/interiorlights.svg';
import {motion,useScroll} from 'framer-motion';

const ProductsWeOffer = () => {

    const { scrollYProgress } = useScroll()
    
  return (
    <div className='products-weoffer-container'>
        <div className='products-weoffer-contents'>
              <div className='info-title'>Products We Offer</div>
              <div className='info-line-box'>
                  <motion.div style={{ scaleX: scrollYProgress  }} className='info-lines'></motion.div>
              </div>
              <div className='info-description'>Providing uniform, well-balanced illumination. Aspects of the building architecture and the interior design, who believe that illumination is more than just bulbs and circuits. It's about evoking emotions, creating atmosphere, and guiding the eye like a skilled storyteller.</div>
              <div className='products-weoffer-section'>

                  <motion.div whileHover={{scale : 1.03}} className='products-weoffer-box interiorlights'>
              
                      <div className='products-weoffer-titlear '>
                          <div>Interior Lights</div>
                         <div>
                         <svg className='morearrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M13.75 10H30V26.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                         </div>
                      </div>

                  </motion.div>
                  <motion.div whileHover={{scale : 1.03}} className='products-weoffer-box outdoorlights'>
                  <div className='products-weoffer-titlear'>
                          <div>Outdoor Lights</div>
                         <div>
                         <svg className='morearrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M13.75 10H30V26.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                         </div>
                      </div>
                  </motion.div>
                  <motion.div whileHover={{scale : 1.03}} className='products-weoffer-box roadlighting'>
                  <div className='products-weoffer-titlear'>
                          <div>Road Lighting</div>
                         <div>
                         <svg className='morearrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M13.75 10H30V26.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                         </div>
                      </div>
                  </motion.div>
                  <motion.div whileHover={{scale : 1.03}} className='products-weoffer-box valueengineering'>
                  <div className='products-weoffer-titlear'>
                          <div>Value Engineering</div>
                         <div>
                         <svg className='morearrow' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M10 30L30 10" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M13.75 10H30V26.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                         </div>
                      </div>
                  </motion.div>

              </div>
          </div>
    </div>
  )
}

export default ProductsWeOffer