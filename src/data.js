
import { FaCode, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaDatabase, FaTools, FaJava, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiMysql, SiPostman, SiGit, SiFigma, SiC, SiCplusplus } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaServer } from "react-icons/fa6";
import bmi from "./assets/bmi.jpeg";
import movie from "./assets/movie.jpeg";
import portfolio from "./assets/portfolio.jpeg";
import project from "./assets/project-management-system.png";
import weather from './assets/weather.png'
import currency from './assets/currency.png'




// experince and certfication for about section
export const Experience = [
  {
    subtitle: "Software Developer Internship",
    year: "Oct 2024 - April 2025",
    companyName: "Visval Career Solutions Private Limited",
    location: "karaikudi",
    duration: "6-months"
  },
  {
    subtitle: "Software Programming Instructor",
    year: "Oct 2023 - Jul 2024",
    companyName: "CSC Computer Education",
    location: "karaikudi",
    duration: "10-months"
  }
];

export const Certificates = [
  { certify: "Full Stack MERN Development" },
  { certify: "JavaScript Programming Essentials from Coursera" },
  { certify: "Advanced Diploma in Python Programming [ADPP]" },
  { certify: "Postgraduate In Diploma Computer Application [PGDCA]" }
];

// skills
//  ================= frontend =================
export const frontend = {
  titleIcon: FaCode,
  title: "Frontend Technologies",
  skills: [
    { name: "HTML", icon: FaHtml5, color: "#ff5526ff" },  // orange-red
    { name: "CSS", icon: FaCss3Alt, color: "#0494faff" }, // blue
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }, // yellow
    { name: "React", icon: FaReact, color: "#0ef" },  // cyan
    { name: "Bootstrap", icon: FaBootstrap, color: "#bb07f1ff" } // purple
  ]
};


// ================= BACKEND =================
export const backend = {
  titleIcon: FaServer,
  title: "Backend & Programming",
  skills: [
    { name: "Node.js", icon: FaNodeJs, color: "#0abe04ff" },
    { name: "Express.js", icon: SiExpress, color: "#fff" },
    { name: "Python", icon: FaPython, color: "#2da0ffff" },
    { name: "Java", icon: FaJava, color: "#fde400ff" },
    { name: "C", icon: SiC, color: "#b6cce6ff" },
    { name: "C++", icon: SiCplusplus, color: "#04fafaff" }
  ]
};


// DATABASE
export const Database = {
  titleIcon: FaDatabase,
  title: "Database",
  skills: [
    { name: "MongoDB", icon: SiMongodb, color: "#01af04ff" },
    { name: "MySQL", icon: SiMysql, color: "#fcc30bff" },   
  ]
};

// ================= TOOLS =================
export const tools = {
  titleIcon: FaTools,
  title: "Tools & Others",
  skills: [
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Git", icon: SiGit, color: "#F1502F" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" }
  ]
};


// projects
// src/data/projectsData.js


export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing skills, projects, and resume with a responsive design.",
    tech: ["React", "Bootstrap", "CSS"],
    image: portfolio,
    github: "https://github.com/Praveenkumar663/new-portfolio",
    live: "https://praveenkumar-orcin.vercel.app/", 
  },
  {
    id: 2,
    title: "MoviHunt",
    description:
      "A movie search app to explore details like ratings, cast, and reviews using a movie API.",
    tech: ["React", "JavaScript", "API", "Bootstrap"],
    image: movie,
    github: "https://github.com/Praveenkumar663/moviehunt", 
    live: "https://moviehunts-five.vercel.app/", 
  },
  {
    id: 3,
    title: "Project Management System ",
    description:
      "Backend system with CRUD APIs for managing projects and tasks, built with Node.js & MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    image: project,
    github: "https://github.com/Praveenkumar663/project-management-backend", 
    live: "", 
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A real-time weather app showing temperature, humidity, and conditions using OpenWeather API.",
    tech: ["React", "JavaScript", "API", "CSS"],
    image:weather ,
    github: " https://github.com/Praveenkumar663/react-weather-app", 
    live: "https://weather-app-pi-mauve-95.vercel.app/",
  },
  {
    id: 5,
    title: "Currency Converter",
    description:
      "A simple app to convert currencies instantly with live exchange rates.",
    tech: ["React", "JavaScript", "API"],
    image:currency ,
    github: "https://github.com/Praveenkumar663/Currency-Conveter", 
    live: "https://currency-conveter-psi.vercel.app/", 
  },
  {
    id: 6,
    title: "BMI Calculator",
    description:
      "A calculator app that checks BMI status based on weight and height inputs.",
    tech: ["React", "JavaScript", "CSS"],
    image:bmi,
    github: "https://github.com/Praveenkumar663/BMI-Calculator", 
    live: "https://bmi-calculator-zeta-azure.vercel.app/", 
  },
];


