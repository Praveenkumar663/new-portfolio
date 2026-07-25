import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import profile from "../assets/profile.jpeg";
import resume from "../../public/praveenkumar-resume.pdf";
import "../styles/home.css";

const Home = () => {
  const roles = ["Full-Stack Developer", "Freelancer"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[currentIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + roles[currentIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 1800);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex]);

  return (
    <section className="home container-fluid">

      <div className="row align-items-center">

        {/* Left */}

        <div className="col-lg-7 col-md-12">

          <div className="hero-content">

            <h5>Hey there !</h5>

            <h1>
              I'm <span>Praveenkumar</span>
            </h1>

            <h3>
              I'm a
              <span className="typing">
                {displayedText}
                <span className="cursor">|</span>
              </span>
            </h3>

            <p>
              Passionate Full Stack Developer specializing in creating modern,
              responsive, scalable web applications with React, Node.js,
              Express, MongoDB, and JavaScript. I enjoy solving real-world
              problems through clean code and beautiful UI.
            </p>

            <div className="social-icons">

              <a href="https://github.com/Praveenkumar663" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/praveenkumar663/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https://wa.me/qr/BCSGXBYQQFZWG1" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>

              <a href="https://www.instagram.com/itz_praveen_06__" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>

            </div>

            <div className="hero-buttons">

              <a href={resume} target="_blank" rel="noreferrer">
                Resume
              </a>

              <Link to="/contact">
                Hire Me
              </Link>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="col-lg-5 col-md-12  ">

          <div className="profile-image">

            <img src={profile} alt="profile"/>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;