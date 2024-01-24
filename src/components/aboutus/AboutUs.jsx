import React from 'react';
import '../aboutus/AboutUs.css';
import aboutimage from '/src/images/aboutimage.svg';

const AboutUs = () => {
  return (
    <div className='aboutus-container'>
        <div className='aboutus-content'>
            <div className='about-us-banner'>
           <div className='about-us-text'>about us</div>
            </div>
            <div className='about-us-section'>
                <div className='aboutus-sec-right'>
                    <img className='aboutimage' src={aboutimage} width='70%' height='70%'/>
                </div>
                <div className='aboutus-sec-left'>
                    <div className='aboutus-left-title'>Our Story</div>
                      <div className='aboutus-left-description'>
                          Shimmering Lights is born from – a world where lighting is an art form, a storytelling medium, and a key player in sustainable design. Shimmering Lights inspired from nature where we embrace prime consideration to sustainability in the course of the design and material selection process.


                          <br/><br/>Providing uniform, well-balanced illumination. Aspects of the building architecture and the interior design, who believe that illumination is more than just bulbs and circuits. It's about evoking emotions, creating atmosphere, and guiding the eye like a skilled storyteller.

                          <br/><br/>We partner with architects, developers, and design professionals to create environments that inspire, energize, and leave a lasting impression. Leveraging the latest lighting technologies to achieve not just energy efficiency but also functional beauty and emotional resonance.
                      </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default AboutUs