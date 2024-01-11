import React from 'react';
import './styles/footer.css'
import phoneIcon from "./styles/images/phone-icon.png";
import emailIcon from "./styles/images/email-icon.png";

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <h3 className='contact-title'> Get In Touch</h3>
        <div className='email'>
          <img src={emailIcon} alt="Email:"/>
          <p>diegov5498@gmail.com</p>
        </div>
        <div className="phone">
        <img src={phoneIcon} alt="Phone:"/>
          <p>+7146100574</p>
        </div>
      </div>
      
      <p className='update'>Last updated: 1/9/2024</p>

    </footer>
  );
};

export default Footer;