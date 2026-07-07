import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel repellat cumque necessitatibus ipsa excepturi fugiat, sunt consectetur eligendi nam molestiae saepe blanditiis deserunt voluptatem.</p>
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
                    <li>+91-888-456-1236</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-Copyright">Copyright 2026 © Tomato.com - All Right Reserved.</p>
        <p>Made By - Aman Vishwakarma</p>
    </div>
  )
}

export default Footer
