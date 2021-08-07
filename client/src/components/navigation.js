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
            <div className='nav-infos'>
              <ul className='nav-info' style={{marginLeft: '20px'}}>
              <li className='nav-info-label'>GlobalxSolutions</li>
              <li className="nav-info-paragraph">We build teams that build your software</li>
              <a href="https://www.instagram.com/globalxsolutions" target='_blank' rel="noopener noreferrer">
              <img className='nav-info-img' src={instagram} alt="instagram"/><span>&nbsp;&nbsp;</span>
              </a>
              <br></br>
              <li className='nav-info-label'>Trusted By</li>
              <li>
              <img className='nav-info-img' src={GDBR} alt="GDBR" style={{width: '60pt'}}/><span> &nbsp;</span>          
              <img className='nav-info-img' src={talentadore} alt="GDBR" style={{width: '60pt'}}/>   
              </li>
              </ul>
              <ul className='nav-info' style={{marginLeft: '20px'}}>
              <li className='nav-info-label'>Quick Links</li>
              <li className='nav-info-link'>
                <NavLink to='/' exact>
                  Home
                </NavLink>
              </li>
              <li className='nav-info-link'>
                <NavLink to='/about-us' exact>
                  About us
                </NavLink>
              </li>
              <li className='nav-info-link'>
                <NavLink to='/services' exact>
                  Services
                </NavLink>
              </li>
              {/* <li className='nav-info-link'>
                <NavLink to='/work' exact>
                  Works
                </NavLink>
              </li> */}
              <li className='nav-info-link'>
                <NavLink to='/approach' exact>
                Get in touch with us
                </NavLink>
              </li>
              <li className='nav-info-link'>
                <NavLink to='/audit' exact>
                Get a free audit
                </NavLink>
              </li>
              <li className='nav-info-link'>
                <NavLink to='/careers' exact>
                Careers & Meetup
                </NavLink>
              </li>
          </ul>
            </div>
          </div>
          <div className='nav-column'>
            <div className='nav-infos'>
              <ul className='nav-info' style={{marginLeft: '20px'}}>
              <li className='nav-info-label'>Singapore Office</li>
              <li className="nav-info-paragraph">Gambas Cres, #01-11 50, Singapore 757022.</li>  
              <li className='nav-info-label'>Karachi Office</li>
              <li className="nav-info-paragraph">Gulistan e jauhar, Empire Center, A6 Karachi.</li>  
              </ul>
              <ul className='nav-info nav-info-talk' style={{marginLeft: '20px'}}>
                <li className='nav-info-label'>Let’s talk this out</li>
                <li className="nav-info-paragraph">+92 (332) 3420840</li>
                <li className="nav-info-paragraph">info@globalxsolutions.com</li>
                <li className="nav-info-copywrite"> 2021 © GlobalxSolutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
