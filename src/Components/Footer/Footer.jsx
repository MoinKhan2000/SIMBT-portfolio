import React from 'react';
import './Footer.css';
import linkedIn from '../../img/linkedIn.svg';
import Github from '../../img/Github.svg';
import Insta from '../../img/Insta.svg';
function Footer() {
    return (
        <div className='footer'>
            <div className="f-content">
                <div className="emailLogos">
                    <span>Email Us : moink089@gmail.com</span>
                    <div className=" i-icons f-icons">
                        <a href="/">  <img src={linkedIn} alt="" /></a>
                        <a href="/">  <img src={Github} alt="" /></a>
                        <a href="/">  <img src={Insta} alt="" /></a>
                    </div>
                </div>
            </div>
            <span className='copyMsg'>Copyright &copy; 2023 Moin Khan. All Rights Reserved. </span>
        </div>
    );
}

export default Footer;
