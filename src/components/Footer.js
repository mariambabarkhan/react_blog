import React from 'react'
import './Footer.css'
import wiredLogo from '../wired-logo-invert.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_grid'>
          <div className='footer_section text-center'>
            <h3 className='footer_title text-center'>
            <img
            src={wiredLogo}
            height="30"
            className="d-inline-block align-top"
            alt="Wired Logo"
            />
            </h3>
            <p className='footer_text'>WIRED is where tomorrow is realized. It is the essential source of information and Ideas that make sense of a world in constant transformation.  The WIRED conversation Illuminates how technology is changing every aspect of our lives-from culture to business, science to design. The breakthroughs and innovations that we uncover lead to new ways of thinking, new connections, and new industries.</p>
          </div>

          <hr/>
          <div className='footer-bottoms'>
            <div className='footer_section'>
              <h3 className='footer_title'>MORE FROM WIRED</h3>
              <ul className='footer_list'>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Subscribe</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Archive</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Newsletters</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>FAQs</a>
                </li>
              </ul>
            </div>

            <div className='footer_section'>
              <ul className='footer_list'>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Archive</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>RSS</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Accessibility Help</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Prime Day</a>
                </li>
              </ul>
            </div>

            <div className='footer_section'>
              <h3 className='footer_title'>REVIEWS AND GUIDES</h3>
              <ul className='footer_list'>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Reviews</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Buying Guides</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Electric Bikes</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Fitness Trackers</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Streaming Guides</a>
                </li>
                
              </ul>
            </div>

            <div className='footer_section'>
              <ul className='footer_list'>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Coupons</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Submit an Offer</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Code Guarantee</a>
                </li>
                <li className='footer_list-item'>
                  <a href='#' className='footer_link'>Coupons Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <hr/>
          <div className='footer_copyright'>
            <p className='footer_copy'>© 2024 Condé Nast. All rights reserved.</p>
          </div>

        </div>
        
      </div>
    </footer>
  )
}

export default Footer
