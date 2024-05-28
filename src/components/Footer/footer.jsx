import React from 'react'
import './footer.css'
import fb from '../../assets/fb.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'

const footer = () => {
  return (
    <div className='footer'>
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className='sb_footer-links_div'>
                    <h4>For Business</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                <h4>Resources</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                <h4>Partner</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                <h4>Follow Us On</h4>
                <div className='socialmedia'>
              <a href='https://www.facebook.com/adsprodigitalmarketing/'>
                <img src={fb} alt='Facebook' />
              </a>
              <a href='https://www.linkedin.com/company/adsprocoin/'>
                <img src={linkedin} alt='LinkedIn' />
              </a>
              <a href='https://www.instagram.com/adspro.co.in/'>
                <img src={instagram} alt='Instagram' />
              </a>
            </div>
                </div>
            </div>
            <hr />
            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} AdsPro.All rights  reserved.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/pp"><div><p>Privacy Policy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declarations</p></div></a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default footer
