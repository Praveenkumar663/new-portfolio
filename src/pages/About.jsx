import '../styles/About.css'
import {Experience,Certificates} from '../data.js'
import { FaDownload } from "react-icons/fa";

const About = () => {

  return (
    <div className="container-fluid about">
      
      <div className="row">
        <h2 className='text-center  fw-bold mb-3 about-title'>About <span>Me</span> </h2>
      </div>
       <div className="row about-content  mt-1">
        <p className='about-text'>I’m Praveenkumar, a passionate <b>Full-Stack Developer</b> and <b>MCA student</b> with a strong interest in building modern, scalable, and user-friendly applications. My technical expertise includes the <b>MERN Stack (MongoDB, Express.js, React, Node.js)</b> along with <b>Python</b>, <b>Java</b>, <b>MySQL</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, and <b>Bootstrap</b>.</p>
        <p className='about-text'>
          I’ve gained practical experience through a <b>6-month internship as a Software Developer at Visval Career Solutions</b> Pvt Ltd and by working as a <b>Programming Instructor at CSC</b>, where I taught <b>C, C++, Python, HTML, and CSS</b>. These experiences helped me sharpen my problem-solving, coding, and mentoring skills.
        </p>
        <p className='about-text'>
          My goal is to grow as a <b>Full-Stack Developer</b>, continuously learning and contributing to impactful projects. I’m open to <b>job opportunities</b>, <b>internships</b>, and <b>freelance </b> projects, where I can apply my skills and gain valuable industry experience
        </p>

       </div>

       {/* download rrsume */}
       <div className="row download-resume">
        <a href="praveenkumar-resume.pdf" download="Praveenkumar_Resume.pdf"
      className="btn-resume"><FaDownload style={{ marginRight: "8px" }} />Download Resume</a>
       </div>

       {/* education, experiences and certifications details */}

      <div className="row about-details ">
        {/* educatins */}
            <div className="col-sm-12 col-md-6 col-lg-4 my-md-5 my-sm-3">
              <div className="card">
                <h2 className="card-title">Education</h2>
                <div className="card-body">
                  <h4 className="card-subtitle">Master of Computer Application</h4>
                  <p className="card-text d-block">Alagappa University
                    <span className='d-block'>karaikudi</span>
                    <span>2024-2026</span>
                  </p>

                  <h4 className="card-subtitle">Bachelor of Science (Mathematics)</h4>
                  <p className="card-text d-block">Alagappa Government Arts & Science College,
                      <span className='d-block'>Alagappa University </span>
                    <span className='d-block'>karaikudi</span>
                    <span>2021-2024</span>
                  </p>
                </div>
              </div>
            </div>

      {/* Experience */}

       <div className="col-sm-12 col-md-6 col-lg-4 my-md-5 my-sm-3">
  <div className="card">
    <h2 className="card-title">Experience</h2>
    <div className="card-body">  
      {Experience.map((exper, index) => (
        <div className="experience-item" key={index}>
          <h4 className="card-subtitle">{exper.subtitle}</h4>
          <span className="experience-year">{exper.year}</span>
          <p className="card-text d-block">
            {exper.companyName}
            <span className="d-block">{exper.location}</span>
            <span>{exper.duration}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

            
      {/* Certifications */}
       <div className="col-sm-12 col-md-6 col-lg-4 my-md-5 my-sm-3">
              <div className="card">
                <h2 className="card-title">Certifications</h2>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                      {Certificates.map((certify,index)=>(
                        <li className="list-group-item" key={index}>{certify.certify}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>

  )
}

export default About