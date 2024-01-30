import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import '../contactmodal/ContactModale.css';

const ContactModale = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const closeModale = () => {
        document.getElementById("modalecontainer").style.display = 'none';
        setFormState({ name: '', email: '', message: '' });
    };

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const sendEmail = () => {
        emailjs.send('service_jl2tinc', 'template_0scbd9l', formState, '0fyyCkU6Ci1GObofE')
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error.text);
            });
            closeModale();
    };

    return (
        <div id='modalecontainer' className='contact-modale-container'>
            <div className='contact-modale-content'>
                <div onClick={() => closeModale()} className='close-contact-modale'>X</div>
                <div className='contact-msg-title'>Contact Us</div>
                <div className='contact-input-wrapper'>
                    <div className='contact-input-subtext'>Name</div>
                    <input placeholder='Full Name' type='text' name='name' value={formState.name} onChange={changeHandler} className='contact-msg-name' />
                </div>
                <div className='contact-input-wrapper'>
                    <div className='contact-input-subtext'>Email</div>
                    <input placeholder='Email' type='email' name='email' value={formState.email} onChange={changeHandler} className='contact-msg-email' />
                </div>
                <div className='contact-input-wrapper'>
                    <div className='contact-input-subtext'>Message</div>
                    <textarea placeholder='Message' rows="6" name='message' value={formState.message} onChange={changeHandler} className='contact-msg-detail' />
                </div>
                <div onClick={() => sendEmail()} className='contact-msg-btn'>Submit</div>
            </div>
        </div>
    );
};

export default ContactModale;

