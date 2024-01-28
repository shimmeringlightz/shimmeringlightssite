import React, { useEffect, useState } from 'react';
import '../contactmodal/ContactModale.css'

const ContactModale = () => {

    const closeModale = () => {
     
            document.getElementById("modalecontainer").style.display = 'none';
       
    }

    return (
        <div id='modalecontainer' className='contact-modale-container'  >
            <div className='contact-modale-content'>
                <div onClick={()=>closeModale()} className='close-contact-modale'>X</div>
                <div className='contact-msg-title'>Contact Us</div>
                <div className='contact-input-wrapper'>
                    <div className='contact-input-subtext'>Name</div>
                    <input placeholder='Full Name' type='text' className='contact-msg-name' />
                </div>
                <div className='contact-input-wrapper'>
                    <div className='contact-input-subtext'>Email</div>
                    <input placeholder='Email' type='email' className='contact-msg-email' />
                </div>
                <div className='contact-input-wrapper'>
                    <div className='contact-input-subtext'>Message</div>
                    <textarea placeholder='Message' rows="6" className='contact-msg-detail' />
                </div>



                <div onClick={()=>closeModale()} className='contact-msg-btn'>Submit</div>
            </div>
        </div>

    )
}

export default ContactModale