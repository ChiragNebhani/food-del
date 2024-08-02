import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <div className="footer-logo">
                <h1>Yumbite.</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque temporibus tempora, aperiam unde ducimus quidem adipisci ad iusto expedita est animi nam cumque! Sunt, mollitia reprehenderit magni aperiam perspiciatis tempora.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@yumbite.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © yumbite.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
