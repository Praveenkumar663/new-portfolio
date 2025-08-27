import '../styles/home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import profile from '../assets/profile1.jpg'

const Home = () => {
  const roles = ["Full-Stack Developer", "MERN Stack Developer", "Freelancer"];
 const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[currentIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + roles[currentIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // typing speed (100ms per letter)
      return () => clearTimeout(timeout);
    } else {
      // wait for 1.5s, then move to next role
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex, roles]);


  return (
    <div className="container-fluid home">
        <div className="row">
          {/* intro */}

            <div className="col-sm-12 col-md-12 col-lg-7">
                <span className='text-light ps-md-5  ps-sm-3 h5'>Hey there!</span>
                <br />
                <h2 className='text-light ps-md-5  ps-sm-3 pt-2 mb-3'>I'm <strong>PRAVEENKUMAR</strong></h2>
                <span className='text-light ps-md-5  ps-sm-3  h5'>And I'm  a
                <span className=' fs-4  pt-2 dev ps-3'><strong>{displayedText}</strong></span>
                </span>

                <p className='text-light ps-md-5  ps-sm-2  pt-4 fw-5 mt-2'>I’m a passionate <b>Full-Stack Web Developer</b> with expertise in building <b>scalable</b> and <b>user-friendly</b> web applications. I enjoy solving real-world problems through clean code and modern technologies. I’m open to <b>freelance projects</b> and <b>collaborations</b>.
                </p>

                  {/* logo */}
                  <div className="logo p-2 mt-4">
                      <a href="https://github.com/Praveenkumar663" className="icon" target="_blank" rel="noreferrer">
                        <i className="bi bi-github"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/praveenkumar663/" className="icon" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="https://wa.me/qr/BCSGXBYQQFZWG1" className="icon" target="_blank" rel="noreferrer">
                        <i className="bi bi-whatsapp"></i>
                      </a>
                      <a href="https://www.instagram.com/itz_praveen_06__" className="icon" target="_blank" rel="noreferrer">
                        <i className="bi bi-instagram"></i>
                      </a>
                  </div>

                  {/* Buttons */}
                  <div className="buttons-groups">
                    <a href="#" download className='btns me-3'><i class="bi bi-download fs-4  pe-1 "></i> Download CV</a>
                    <Link to='/contact' className='btns'>Hire Me</Link>
                  </div>

             </div>

          {/* img */}
           
          <div className="col-sm-12 col-md-12 col-lg-5 ">
            <div className="img">
              <img src={profile} alt="profile" className=' img-fluid' />
            </div>
          </div>

         </div>
    </div>
  )
}

export default Home