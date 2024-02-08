import React, { useState, useEffect } from 'react';
import '../contact/Contact.css';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import gsap from 'gsap';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [sendData, setSendData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const submitData = () => {
    
    if(emailRegex.test(sendData.email)  && sendData.message != '' && sendData.name != '' && sendData.email != ''){

      emailjs.send('service_jl2tinc', 'template_0scbd9l', sendData, '0fyyCkU6Ci1GObofE')
      .then((result) => {
        setSendData({
          name: '',
          email: '',
          message: ''
        })
        console.log(result.text);
       
        toast.success('Email Send Successfully');
      
      })
      .catch((error) => {
        setSendData({
          name: '',
          email: '',
          message: ''
        })
        console.log(error.text);
        toast.error('Email Failed To Send');
      
      });


    }else{
      toast.error('Invalid Details');
    }
  }

  const handleInputChange = (event) => {
    setSendData({ ...sendData, [event.target.name]: event.target.value })
  }

  console.log(sendData)


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

        if (link.classList.contains('aboutsmall')) {
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
          <div className='services-text'>Contact Us</div>
        </div>
        <div className='services-detail-container'>
          <div className='services-detail-titledes'>
            <div className='services-detail-title'>Contact Us</div>
            <div className='info-serviceline-box'>
              <motion.div className='service-line'></motion.div>
            </div>
            <div className='services-detail-description faderedball'>Get in touch with Shimmering Lights! Whether you have inquiries, projects to discuss, or seek expert advice, our team is ready to illuminate your path. Reach out today and let's light up a brighter future together.</div>
          </div>
          <div className='contact-qrcode-container'>
            <div className='contact-qrcode-left'>
              <div className='name-email-box'>
                <div className='contactnamesec'>
                  <div className='contactname'>Name</div>
                  <input value={sendData.name} onChange={handleInputChange} className='contactfield' name='name' type='text' />
                </div>
                <div className='contactnamesec'>
                  <div className='contactname'>Email</div>
                  <input value={sendData.email} onChange={handleInputChange} className='contactfield' name='email' type='text' />
                </div>
              </div>
              <div className='name-email-message'>
                <div className='contactnamesec'>
                  <div className='contactname'>Message</div>
                  <textarea value={sendData.message} onChange={handleInputChange} name='message' className='contactfield' rows={8} cols={10} type='text' />
                </div>
              </div>
              <div className='name-email-submitbtn'>
                <div onClick={() => { submitData() }} className='contactsubmitbtn'>Submit</div>
              </div>
            </div>
            <div className='contact-qrcode-right'>
              <div className='qr-code-image'></div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
      position="bottom-right"
      hideProgressBar={true}
      />
    </div>
  )
}

export default Contact