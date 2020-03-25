import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <br></br>
            {/* <div className='nav-label'>Menu</div> */}
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
            {/* <div className='nav-label'>Contact</div> */}
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Offices</li>
                <li>Mezzanine floor, Lane, 5 D.H.A. Phase-VII, Karachi City, Pakistan 75500.</li>
                {/* <li>Paya Lebar Square #12-53 Singapore 409051</li> */}
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+92 21 35342020</li>
                {/* <br></br> */}
                {/* <li>+65 9179 1468</li> */}
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Let's Talk</li>
                <li>
                  info@zerolanddigital.com
                </li>
                <li>
                <NavLink to='/careers' exact>
                Careers & Meetup
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
