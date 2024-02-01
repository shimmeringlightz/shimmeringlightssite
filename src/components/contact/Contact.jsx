import React from 'react';
import '../contact/Contact.css';
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='services-container'>
    {/* <div className="cursor"></div> */}
    <div className='services-content'>
        <div className='services-banner'>
            <div className='services-text'>Contact Us</div>
        </div>

        <div className='services-detail-container'>

            <div className='services-detail-titledes'>
                <div className='services-detail-title'>Contact Us</div>
                <div className='info-serviceline-box'>
                    <motion.div className='service-line'></motion.div>
                </div>
                <div className='services-detail-description'>Get in touch with Shimmering Lights! Whether you have inquiries, projects to discuss, or seek expert advice, our team is ready to illuminate your path. Reach out today and let's light up a brighter future together.</div>
            </div>
            
            <div className='contact-qrcode-container'>

            <div className='contact-qrcode-left'>

              <div className='name-email-box'>

                <div className='contactnamesec'>
                  <div className='contactname'>Name</div>
                  <input className='contactfield' type='text'/>
                </div>

                <div className='contactnamesec'>
                  <div className='contactname'>Email</div>
                  <input className='contactfield' type='text'/>
                </div>


              </div>
              <div className='name-email-message'>
              <div className='contactnamesec'>
                  <div className='contactname'>Message</div>
                  <textarea className='contactfield' rows={8} cols={10} type='text'/>
                </div>
              </div>
              <div className='name-email-submitbtn'>
                    <div className='contactsubmitbtn'>Submit</div>
              </div>

              </div>
              <div className='contact-qrcode-right'>
                <div className='qr-code-image'></div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Contact