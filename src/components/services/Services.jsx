import React from 'react';
import '../services/Services.css';
import aboutimage from '/src/images/aboutimage.svg';
import { useScroll,motion } from 'framer-motion';


const Services = () => {

    const { scrollYProgress } = useScroll()


    return (
        <div className='services-container'>
            <div className='services-content'>
                <div className='services-banner'>
                    <div className='services-text'>Services</div>
                </div>

                <div className='services-detail-container'>

                    <div className='services-detail-titledes'>
                        <div className='services-detail-title'>Services We Offer</div>
                        <div className='info-serviceline-box'>
                            <motion.div className='service-line'></motion.div>
                        </div>
                        <div className='services-detail-description'>Explore our diverse range of lighting services, meticulously crafted to illuminate your spaces with sophistication and style. From ambient indoor glow to powerful street lighting, Shimmering Lights brings brilliance to every corner</div>
                    </div>

                    <div className='services-detail-design'>

                          <div className='services-detail-left'></div>

                        <div className='services-detail-right'>
                            <div className='services-detail-title'>Design</div>
                            <div className='service-detail-description'>Primary guideline for lighting professionals, architects, and engineers, ensuring
                                optimal lighting conditions for occupants while adhering to energy efficiency
                                and sustainability principles. Well-balanced luminance distribution the luminance of all surfaces shall be taken into consideration. The lighting designer shall consider and select the appropriate reflectance and illuminance values for the interior surfaces.</div>
                                <motion.div whileHover={{scale:1.04}} className='enquiry-now'>Enquiry Now</motion.div>
                            </div>
                     

                    </div>

                    <div className='services-detail-design'>

                          

                        <div className='services-detail-right box-a'>
                            <div className='services-detail-title '>Engineering </div>
                            <div className='service-detail-description '>Renowned software for professional lighting design in buildings. Offers accurate
                                lighting calculations, energy analysis, and realistic visualizations. Ideal for
                                architects, engineers, and lighting designers focused on real-world applications.
                                Rationale communication & understand the project requirements, Identify the
                                materials including approval for, formal submittal package, drawings and any
                                other relevant documentation.</div>
                                <motion.div whileHover={{scale:1.04}} className='enquiry-now'>Enquiry Now</motion.div>
                            </div>
                           

                        <div className='services-detail-left box-b'></div>

                    </div>


                    <div className='services-detail-design'>

                    <div className='services-detail-left'></div>

                        <div className='services-detail-right'>
                            <div className='services-detail-title'>Supply</div>
                            <div className='service-detail-description'>Primary guideline for lighting professionals, architects, and engineers, ensuring
                                optimal lighting conditions for occupants while adhering to energy efficiency
                                and sustainability principles. Well-balanced luminance distribution the luminance of all surfaces shall be taken into consideration. The lighting designer shall consider and select the appropriate reflectance and illuminance values for the interior surfaces.</div>
                            <motion.div whileHover={{scale:1.04}} className='enquiry-now'>Enquiry Now</motion.div>
                        </div>
                        

                     

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services