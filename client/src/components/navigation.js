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
                <li className='nav-info-label'>
                  <NavLink to='/' exact>
                    HOME/ABOUT
                  </NavLink>
                </li>
              </ul>
              <ul className='nav-info' style={{marginLeft: '20px'}}>
                <li className='nav-info-label'>
                  <NavLink to='/post' exact>
                  BLOG/NEWS
                  </NavLink>
                </li>
              </ul>
              <ul className='nav-info' style={{marginLeft: '20px'}}>
                <li className='nav-info-label'>
                  <NavLink to='/social-media' exact>
                    SOCIAL MEDIA
                  </NavLink>
                </li>
              </ul>
              <ul className='nav-info' style={{marginLeft: '20px'}}>
                <li className='nav-info-label'>
                  <NavLink to='/contact' exact>
                    CONTACT
                  </NavLink>
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
