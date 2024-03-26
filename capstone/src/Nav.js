import React, { useState } from 'react';
import { ReactComponent as ReactLogo } from './assets/Logo .svg';
import { ReactComponent as ReactHamburger } from './assets/🦆 icon _hamburger menu_.svg';
import './Nav.css';

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="container">
        <span>
          <ReactLogo />
        </span>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
        <div className>
          <ReactHamburger className="hamburger" onClick={handleClick} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
