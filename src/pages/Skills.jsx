import {frontend,backend,Database, tools} from '../data.js'
import '../styles/Skill.css'
import { FaBullseye,FaBookOpen} from "react-icons/fa6";

const Skills = () => {
  return (
   
    <div className="container-fluid skills">
      {/* title */}
        <div className="row">
          <h2 className='text-center  fw-bold mb-3 skill-title'>My <span className="title-color">Skills</span> </h2>
        </div>
        {/* skill content */}
          <div className="row skill-content my-3">
            <p className='text-center'>These are my core skills, along with the technologies I am currently learning and the areas I plan to explore in the future. </p>
          </div>

      {/* skills  */}

        <div className="row skill-details">
        {/* frontend */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-title-logo">
                <span className="card-title-icon me-2"><frontend.titleIcon/></span>
                <span className="card-title">{frontend.title}</span>
              </div>
                 <div className="card-body">
                   <ul className="list-group list-group-flush ">

                    {frontend.skills.map((skill,index)=>(
                       <li className="list-group-item" style={{color:skill.color}} key={index}>
                      <skill.icon/>
                      </li>
                    ))}
                   </ul>
                   <ul className="icon-name mt-4"> 
                    {frontend.skills.map((skill,index)=>(
                      <li key={index}>{skill.name}</li>
                    
                    ))}
                   </ul>
                 </div>
            </div>
          </div>
                {/* backend */}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-title-logo">
                <span className="card-title-icon me-2"><backend.titleIcon/></span>
                <span className="card-title">{backend.title}</span>
              </div>
                 <div className="card-body">
                   <ul className="list-group list-group-flush ">

                    {backend.skills.map((skill,index)=>(
                       <li className="list-group-item" style={{color:skill.color}} key={index}>
                      <skill.icon/>
                      </li>
                    ))}
                   </ul>
                   <ul className="icon-name mt-4"> 
                    {backend.skills.map((skill,index)=>(
                      <li key={index}>{skill.name}</li>
                    
                    ))}
                   </ul>
                 </div>
            </div>
          </div>

                {/* DATABASE*/}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-title-logo">
                <span className="card-title-icon me-2"><Database.titleIcon/></span>
                <span className="card-title">{Database.title}</span>
              </div>
                 <div className="card-body">
                   <ul className="list-group list-group-flush ">

                    {Database.skills.map((skill,index)=>(
                       <li className="list-group-item" style={{color:skill.color}} key={index}>
                      <skill.icon/>
                      </li>
                    ))}
                   </ul>
                   <ul className="icon-name mt-4"> 
                    {Database.skills.map((skill,index)=>(
                      <li key={index}>{skill.name}</li>
                    
                    ))}
                   </ul>
                 </div>
            </div>
          </div>

                {/* Tools*/}
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-title-logo">
                <span className="card-title-icon me-2"><tools.titleIcon/></span>
                <span className="card-title">{tools.title}</span>
              </div>
                 <div className="card-body">
                   <ul className="list-group list-group-flush ">

                    {tools.skills.map((skill,index)=>(
                       <li className="list-group-item" style={{color:skill.color}} key={index}>
                      <skill.icon/>
                      </li>
                    ))}
                   </ul>
                   <ul className="icon-name mt-4"> 
                    {tools.skills.map((skill,index)=>(
                      <li key={index}>{skill.name}</li>
                    
                    ))}
                   </ul>
                 </div>
            </div>
          </div>

               {/* learning */}
               <div className="row learning">

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="current-learning mb-4">
                    <span className="icon "><FaBookOpen /></span>
                    <span className="title">Currently Learning</span>
                    <ul>
                      <li>Data Structures & Algorithms (Java)</li>
                      <li>Advanced React Patterns and Optimization</li>
                      <li>Vue.js(expanding frontend expertise)</li>
                      <li>Rest APIs & Authentication</li>
                    </ul>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="future-goal mb-4">
                    <span className="icon "><FaBullseye /></span>
                    <span className="title">Future Goals</span>
                    <ul>
                      <li>Cloud technologies (AWS, Azure)</li>
                      <li>DevOps and CI/CD pipelines</li>
                      <li>Mobile development with React Native</li>
                      <li>AI/Ml</li>
                    </ul>
                  </div>
                </div>

               </div>

        </div>




    </div>

  )
}

export default Skills