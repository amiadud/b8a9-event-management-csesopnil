import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {



    return (
        <>
          <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <header className="footer-title">Services</header> 
    <Link to={`/service-details/1`} className="link link-hover">Venue Booking and Setup</Link> 
    <Link to={`/service-details/2`} className="link link-hover">Artist Management</Link> 
    <Link to={`/service-details/5`} className="link link-hover">Event Security</Link> 
    <Link to={`/service-details/4`} className="link link-hover">Audio-Visual Production</Link>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </nav> 
</footer>
        </>
    );
};

export default Footer;