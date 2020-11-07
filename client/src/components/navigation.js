import React from "react";
import { NavLink } from "react-router-dom";
import instagram from "../assets/socialicons/instagram.svg";
import GDBR from "../assets/gdpr_logo.png";
import talentadore from "../assets/talentadore-logo-g.png";


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
              {/* <li>
                <NavLink to='/work' exact>
                  Works
                </NavLink>
              </li> */}
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
              <li>
                <NavLink to='/careers' exact>
                Careers & Meetup
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Singapore Office</li>
                <br/>
                <li>Gambas Cres, #01-11 50, Singapore 757022.</li>
              </ul>
              <ul className='nav-info' style={{marginLeft: '30px'}}>
              <li className='nav-info-label'>Karachi Office</li>
              <br/>
                <li>Office # M-2, 43C Tauheed Commercial, DHA Phase V.</li>
              </ul>
              <ul className='nav-info nav-info-talk' style={{marginLeft: '30px'}}>
                <li className='nav-info-label'>Let’s talk this out</li>
                <br/>
                <li>info@globalxsolutions.com</li>
                <br/>
                <li className='nav-info-label'>Trusted By</li>
                <li>
                <img src={GDBR} alt="GDBR" style={{width: '60pt'}}/><span> &nbsp;</span>          
                <img src={talentadore} alt="GDBR" style={{width: '60pt'}}/>   
                </li>
                <li>
                <a href="https://www.instagram.com/globalxsolutions" target='_blank' rel="noopener noreferrer">
                <img src={instagram} alt="instagram"/><span>&nbsp;&nbsp;</span>
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
