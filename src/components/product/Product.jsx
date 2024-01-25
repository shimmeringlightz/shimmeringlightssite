import React from 'react';
import '../product/Product.css';
import {motion} from 'framer-motion'

const Product = () => {
  return (
    <div className='services-container'>
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
                        <div className='services-detail-description'>Discover brilliance in every detail with our curated collection of lighting products. From elegant indoor fixtures to robust streetlight solutions, Shimmering Lights presents a spectrum of quality luminaires designed to elevate your spaces.</div>
                    </div>

                 
                   


                   

                </div>

            </div>
        </div>
  )
}

export default Product