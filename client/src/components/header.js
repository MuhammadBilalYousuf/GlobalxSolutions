import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Headroom from "react-headroom";
import { openMenu, closeMenu } from "../animations/menuAnimations";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";

// Define reducer
const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });
  const caseStudies = [
    {
      id: 1,
      img: "main-logo"
    }
  ];
  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
          <NavLink to='/' exact>
            {caseStudies.map(caseItem => (
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt="Zeroland-Logo"
                  id={caseItem.id}
                  key={caseItem.id}
                />
          ))}
            </NavLink>
          </div>
          <div className='nav-toggle'>
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className='hamburger-menu'>
                <Headroom >
              <span></span>
              <span></span>
              </Headroom>
            </div>
            <div
              className='hamburger-menu-close'
              onClick={() => setMenuState({ menuOpened: false })}>
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
