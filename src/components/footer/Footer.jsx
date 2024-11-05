import React from 'react';
import './footer.css';
import footerImg from '../../assets/logos/footer-logo.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-upper">
        <div className="side">.</div>
        <div className="img">
          <img src={footerImg} alt="" />
        </div>
        <div className="side"></div>
      </div>
      <div className="footer-lower">
        <p>Copyright 2024  © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
        <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
      </div>
    </div>
  )
}

export default Footer