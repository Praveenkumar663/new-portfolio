import '../styles/About.css'
import {Experience,Certificates} from '../data.js'
import { FaDownload } from "react-icons/fa";
import resume from '../../public/praveenkumar-resume.pdf'

const About = () => {

  return (
    <div className="container-fluid about">
      
      <div className="row">
        <h2 className='text-center  fw-bold mb-3 about-title'>About <span>Me</span> </h2>
      </div>
       <div className="row about-content  mt-1">
      <p className="about-text">
  Hi, I'm <b>Praveenkumar</b>, a passionate <b>Full-Stack Developer</b> with a strong interest in building modern, scalable, and user-friendly web applications. I am skilled in <b>Python, Django, Django REST Framework (DRF)</b>, and frontend development using <b>React, JavaScript, HTML, CSS, and Bootstrap</b>. I also have a basic understanding of the <b>MERN Stack (MongoDB, Express.js, React, and Node.js)</b> and enjoy continuously learning new technologies to build efficient and reliable applications.
</p>

<p className="about-text">
  I have completed a <b>6-month internship as a Software Developer at Visval Career Solutions Pvt. Ltd.</b>, where I gained hands-on experience developing real-world applications and collaborating on software projects. I also worked as a <b>Programming Instructor at CSC</b>, teaching <b>C, C++, Python, HTML, and CSS</b>, which strengthened both my technical knowledge and communication skills.
</p>

<p className="about-text">
  I enjoy solving problems, learning new technologies, and creating responsive, high-quality applications that provide a great user experience. I am currently seeking opportunities as a <b>Full-Stack Developer</b> where I can contribute to meaningful projects, continue growing my skills, and make a positive impact as part of a development team.
</p>

       </div>

       {/* download rrsume */}
       <div className="row download-resume">
        <a href={resume} download="Praveenkumar_Resume.pdf"
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
                  <p className="card-text d-block">Alagappa University
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