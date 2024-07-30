import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
          <Link to="/" className="navbar-logo">
            Sangeeth John
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='#profileCard' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <Link to='/career' className='nav-links' onClick={closeMobileMenu}>
                Career
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                LinkedIn
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' linkto="signup">LinkedIn</Button>}

        </div>
      </nav>

    </>
  )
}

export default Navbar
