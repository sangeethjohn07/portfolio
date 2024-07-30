import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <i className="copyright fa fa-copyright" />
            <p className="footer-text">
                Sangeeth John  &nbsp;&nbsp; |
            </p>
            <Link className="social-media linkedin" to="https://www.linkedin.com/in/sangeethjohn/" target='_blank' aria-label='LinkedIn'>
                <i className="fa fa-linkedin" />
            </Link>
            <Link className="social-media gmail" to="" target='_blank' aria-label='gmail'>
                <i className="fa fa-google" />
            </Link>
      
    </div>
  )
}

export default Footer
