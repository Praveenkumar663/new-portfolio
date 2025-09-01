import '../styles/Project.css'
import {projectsData} from '../data.js'
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from 'react';


const Project = () => {
  const [projects] = useState(projectsData);

  return (
    <div className="container-fluid projects">
      {/* title */}
      <div className="row">
        <h2 className='text-center  fw-bold mb-3 project-title'>My <span className='title-color'>Projects</span> </h2>
      </div>

    {/* intro */}

    <div className="row project-intro">
      <p className='text-light text-center '>Here are some of the projects I’ve developed, highlighting my skills in frontend, backend, and full-stack development using modern web technologies.</p>
    </div>

    {/* projects */}

    <div className="row project-details">
      {projectsData.map((project)=>(
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center" key={project.id}>

          <div className="card">
            <img src={project.image} alt="images" className="card-img  object-fit-cover" />
            <div className="card-body">
                <h4 className="card-title">{project.title}</h4>
                <p className="card-text">{project.description}</p>
                <ul>
                   {project.tech.map((t, index) => (
                    <li key={index}>{t}</li>
                  ))}
                </ul>
                  <div className="project-link">
                    <a href={project.github} className="card-link" target='_blank' > < SiGithub /> GitHub</a>

                    {project.live && (<a href={project.live} className="card-link"  target='_blank' > <FaExternalLinkAlt /> live Demo</a>
                  )}
                    </div>
            </div>

          </div>

      </div>
      ))}
      
      
    </div>

    

    </div>
  )
}

export default Project