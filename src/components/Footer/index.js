import {FaLocationDot, FaPhone, FaEnvelope} from 'react-icons/fa6'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-content-container">
      <img
        className="footer-logo"
        src="https://res.cloudinary.com/dhfmjj1j9/image/upload/v1719121650/Group_134_gltj7x.png"
        alt="footer"
      />
      <p className="footer-desc">
        It is our goal to provide age appropriate opportunity for every child
        enrolled in EduKid Kids Club enrichment classes.
      </p>
    </div>
    <div className="footer-contact-container">
      <h1 className="footer-head">Contact Us</h1>
      <div className="contact-container">
        <FaLocationDot className="contact-icon" />
        <p className="contact-desc">Westlands Building, Nairobi, KE</p>
      </div>
      <div className="contact-container">
        <FaPhone className="contact-icon" />
        <p className="contact-desc">012-345-6789</p>
      </div>
      <div className="contact-container">
        <FaEnvelope className="contact-icon" />
        <p className="contact-desc">edukidsupport@gmail.com</p>
      </div>
    </div>
  </div>
)

export default Footer
