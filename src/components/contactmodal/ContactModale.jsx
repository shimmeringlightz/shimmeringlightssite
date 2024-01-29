import React, { useEffect, useState } from 'react';
import '../contactmodal/ContactModale.css';
import {motion} from 'framer-motion'

const ContactModale = () => {

    const [formState,setFormState] = useState({})

    const closeModale = () => {
     
            document.getElementById("modalecontainer").style.display = 'none';
       
    }

    const changeHandler = (event) => {
        setFormState({...formState , [event.target.name]:event.target.value})
        
    }
    console.log(formState)
    return (
        <div id='modalecontainer' className='contact-modale-container'  >
            <div className='contact-modale-content'>
                <div onClick={()=>closeModale()} className='close-contact-modale'>X</div>
                <div className='contact-msg-title'>Contact Us</div>
                <div className='contact-input-wrapper'>
                    <div className='contact-input-subtext'>Name</div>
                    <input placeholder='Full Name' type='text' name='name' onChange={changeHandler} className='contact-msg-name' />
                </div>
                <div className='contact-input-wrapper'>
                    <div className='contact-input-subtext'>Email</div>
                    <input placeholder='Email' type='email' name='email' onChange={changeHandler}  className='contact-msg-email' />
                </div>
                <div className='contact-input-wrapper'>
                    <div className='contact-input-subtext'>Message</div>
                    <textarea placeholder='Message' rows="6" name='message' onChange={changeHandler}  className='contact-msg-detail' />
                </div>
                <div  onClick={()=>closeModale()} className='contact-msg-btn'>Submit</div>
            </div>
        </div>

    )
}

export default ContactModale