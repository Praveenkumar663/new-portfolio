import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-md sticky-top ">
      <div className="container-fluid">
        <NavLink to="/" className={({isActive})=>(isActive?"navbar-brand":"navbar-brand")}>
           <span className="text-light bg-primary px-1 fs-3 rounded-3">PK</span>
           <span className="ms-2">Portfolio</span>
        </NavLink>

        <button
          type="button"
          className="navbar-toggler "
          onClick={handleToggle}
          aria-controls="menu"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <i className="bi bi-x-lg "></i>
          ) : (
            <i className="bi bi-list "></i>
          )}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="menu">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 ">
            <li className="nav-item nav-justified">
              <NavLink to="/" className={({isActive})=>(isActive?"nav-link active":"nav-link")}>Home</NavLink>
            </li>
            <li className="nav-item nav-justified">
              <NavLink to="/about" className={({isActive})=>(isActive?"nav-link active":"nav-link")}>About</NavLink>
            </li>
            <li className="nav-item nav-justified">
              <NavLink to="/skills" className={({isActive})=>(isActive?"nav-link active":"nav-link")}>Skills</NavLink>
            </li>
            <li className="nav-item nav-justified">
              <NavLink to="/projects" className={({isActive})=>(isActive?"nav-link active":"nav-link")}>Projects</NavLink>
            </li>
            <li className="nav-item nav-justified">
              <NavLink to="/contact" className={({isActive})=>(isActive?"nav-link active":"nav-link")}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
