import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.logo} alt="logo" />
          <p>
            Food Delivery App is an online food ordering app that allows you to
            order from a variety of restaurants and cafes near you. We deliver
            food from your neighborhood local joints, your favorite cafes,
            luxurious & elite restaurants in your area.
          </p>
          <div className="footer-social">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 1234567890</li>
            <li>contact@foodDel.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright © 2024 Food Delivery App - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
