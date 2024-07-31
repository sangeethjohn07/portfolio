import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Button } from './Button';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton)

  return (
    <>

      <nav className="navbar">
        <div className="navbar-container">
          <a href="#mainsection" className="navbar-logo">
            Sangeeth John
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='#education' className='nav-links' onClick={closeMobileMenu}>
              Career
              </a>
            </li>
            <li className='nav-item'>
              <a href='#projects' className='nav-links' onClick={closeMobileMenu}>
              Projects
              </a>
            </li>
            <li className='nav-item'>
              <a href='#skills' className='nav-links' onClick={closeMobileMenu}>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a href="https://www.linkedin.com/in/sangeethjohn/" className='nav-links-mobile' onClick={closeMobileMenu}>
                LinkedIn
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' linkto="https://www.linkedin.com/in/sangeethjohn/">LinkedIn</Button>}

        </div>
      </nav>

    </>
  )
}

export default Navbar
