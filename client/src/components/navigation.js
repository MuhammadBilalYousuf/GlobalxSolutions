import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "../assets/socialicons/facebook.svg";
import instagram from "../assets/socialicons/instagram.svg";
import twitter from "../assets/socialicons/twitter.svg";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <br></br>
            <ul className='nav-links'>
              <li>
                <NavLink to='/about-us' exact>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to='/services' exact>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to='/work' exact>
                  Works
                </NavLink>
              </li>
              <li>
                <NavLink to='/approach' exact>
                Get in touch with us
                </NavLink>
              </li>
              <li>
                <NavLink to='/audit' exact>
                Get a free audit
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Headquarter</li>
                <li>Mezzanine floor, Lane, 5 D.H.A. Phase-VII, Karachi City, Pakistan 75500.</li>
              </ul>
              <ul className='nav-info' style={{marginLeft: '30px'}}>
                <li className='nav-info-label'>Phone</li>
                <li>+92 21 35342020</li>
              </ul>
              <ul className='nav-info nav-info-talk'>
                <li className='nav-info-label'>Let's Talk</li>
                <li>
                  info@zerolanddigital.com
                </li>
                <br></br>
                <li>
                <NavLink to='/careers' exact>
                Careers & Meetup
                </NavLink>
                </li>
                <br></br>
                <li>
                <a href="https://facebook.com/zerolanddigital" target='_blank' rel="noopener noreferrer">
                <img src={facebook} alt="facebook"/><span>&nbsp;&nbsp;</span>
                </a>
                <a href="https://www.instagram.com/zeroland.digital" target='_blank' rel="noopener noreferrer">
                <img src={instagram} alt="instagram"/><span>&nbsp;&nbsp;</span>
                </a>
                <a href="https://twitter.com/zerolanddigital" target='_blank' rel="noopener noreferrer">
                <img src={twitter} alt="twitter"/><span>&nbsp;&nbsp;</span>
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
