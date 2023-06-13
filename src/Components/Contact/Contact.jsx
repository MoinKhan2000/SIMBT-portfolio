import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cc4q6it', 'template_mqg2uov', form.current, 'sWP17Ufv7fvJ7r-br')
            .then((result) => {
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-form" id='contact'>
            <div className="c-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact Me.</span>
                    <div style={{ background: "#ABF1FF94" }} className="blur s-blur1">
                    </div>

                    <div className='blur c-blur' ></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" className="user" placeholder="Name" name="user_name" />
                    <input type="email" required className="user" placeholder="Email" name="user_email" />
                    <textarea name="message" id="message" cols="30" rows="5" className="user" placeholder="Message"></textarea>
                    <input type="submit" value="Send Message" className="button send" />

                    <span style={{ marginTop: '2rem' }}>{done && "Thanks for contancing me! "}</span>
                </form>

            </div>
        </div>
    );
}
export default Contact;
