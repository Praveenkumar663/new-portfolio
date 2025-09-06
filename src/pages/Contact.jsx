import '../styles/Contact.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp ,FaInstagram,FaGithub,FaLinkedin} from "react-icons/fa";



const Contact = () => {

  return (
    <div className="container-fluid contact">
      {/* title */}
      <div className="row ">
        <h2 className='text-center  fw-bold mb-3 contact-title'>Contact <span className='contact-color'>Me</span> </h2>
      </div>

      {/* intro */}
        <div className="row contact-intro">
          <p className="text-light text-center">I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision</p>
        </div>

      {/* Contact Info justify-content-center*/}

      <div className="row  contact-details  ">
            <div className="col-sm-12 col-md-5 col-lg-4">

              {/* contact-informatiom like mail */}
              <div className="Contact-info">

                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <a
                      href="mailto:praveenkumars6603@email.com?subject=Portfolio Inquiry&body=Hello, I visited your portfolio and would like to know more about your work."
                      className="contact-link"
                    > praveenkumars6603@email.com
                    </a>
                  </div>

                  <div className="contact-item">
                      <FaPhoneAlt className="contact-icon" />
                        <a href="tel:+916369886879" className="contact-link">
                          +91 6369886879
                        </a>
                  </div>

                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <a
                      href="https://www.google.com/maps/place/Karaikudi,+Tamil+Nadu,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      Karaikudi, India
                    </a>

                  </div>

                    {/* Social Media Links */}
                <div className="social-links text-center mt-4">
                  <a href="https://www.linkedin.com/in/praveenkumar663/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a href="https://github.com/Praveenkumar663" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href="https://wa.me/916369886879" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                  <a href="https://www.instagram.com/itz_praveen_06__" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>

              </div>
            </div>

            {/* forms */}
            <div className="col-sm-12 col-md-7 col-lg-8  contact-form ">
            <form action="https://api.web3forms.com/submit" method="POST">
  <input 
    type="hidden" 
    name="access_key" 
    value="e5fb91c3-7b4a-4cc7-839b-ab0f13f67c60" 
  />

  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" className="form-control" placeholder="Enter your name" required />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
  </div>

  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" className="form-control" rows="4" placeholder="Write your message..." required></textarea>
  </div>

  <button type="submit" className="btn-submit">Send Message</button>
</form>


  
            </div>

      </div>



    </div>
  )
}

export default Contact