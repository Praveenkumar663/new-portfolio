import "../styles/Project.css";
import { projectsData } from "../data";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const categories = ["All", "Full stack", "Frontend", "Backend"];

const Project = () => {
  const [filterArr, setFilterArr] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setFilterArr(projectsData);
  }, []);

  const handleCategory = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setFilterArr(projectsData);
    } else {
      setFilterArr(
        projectsData.filter((project) => project.category === category)
      );
    }
  };

  return (
    <section className="projects container-fluid">

      <div className="heading">
        <h2>
          My <span>Projects</span>
        </h2>

        <p>
          Here are some of my projects showcasing frontend, backend and
          full-stack development using modern technologies.
        </p>
      </div>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row ">

        {[...filterArr]
          .sort((a, b) => b.id - a.id)
          .map((project) => (

            <div
              className="col-lg-4 col-md-6 col-sm-12 mb-5 "
              key={project.id}
            >
              <div className="project-card">

                <div className="image-box">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SiGithub />
                      GitHub
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}

                  </div>

                </div>

              </div>
            </div>

          ))}

      </div>

    </section>
  );
};

export default Project;