import React from 'react'
import "./Footer.css"
import facebook from "../../assets/facebook_icon.png"
import instagram from "../../assets/instagram_icon.png"
import twitter from "../../assets/twitter_icon.png"
import youtube from "../../assets/youtube_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Hel Center</li>
        <li>Audio Description</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms os Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&copy; 1991-{new Date().getFullYear()} Daniel Cipriano, Inco.</p>
    </div>
  )
}

export default Footer