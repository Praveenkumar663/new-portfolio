
import { FaCode, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaDatabase, FaTools, FaJava, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiMysql, SiPostman, SiGit, SiFigma, SiC, SiCplusplus,SiFlask } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaServer } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { DiDjango } from "react-icons/di";

import bmi from "./assets/bmi.jpeg";
import movie from "./assets/movie.jpeg";
import portfolio from "./assets/portfolio.jpeg";
import project from "./assets/project-management-system.png";
import weather from './assets/weather.png'
import currency from './assets/currency.png'
import AI from './assets/AI.png'
import flight  from './assets/flight.png'
import shopshere  from './assets/shopshere.png'




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


// ================= Programming =================
export const Programming = {
  titleIcon: FaServer,
  title: "Programming",
  skills: [
    { name: "Python", icon: FaPython, color: "#2da0ffff" },
    { name: "SQL", icon: TbSql, color: "#2da0ffff" },
    { name: "Java", icon: FaJava, color: "#fde400ff" },
    { name: "C", icon: SiC, color: "#b6cce6ff" },
    { name: "C++", icon: SiCplusplus, color: "#04fafaff" }
  ]
};


// ================= BACKEND =================
export const backend = {
  titleIcon: FaServer,
  title: "Backend ",
  skills: [
    { name: "Django", icon: DiDjango, color: "rgb(9, 255, 0)" },
    { name: "Flask", icon: SiFlask, color: "#00c3ff" },
    { name: "Node.js", icon: FaNodeJs, color: "#0abe04ff" },
    { name: "Express.js", icon: SiExpress, color: "#fff" },
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
    title: "Currency Converter",
    category:"Frontend",
    description:
      "A simple app to convert currencies instantly with live exchange rates.",
    tech: ["React", "JavaScript", "API"],
    image:currency ,
    github: "https://github.com/Praveenkumar663/Currency-Conveter", 
    live: "https://currency-conveter-psi.vercel.app/", 
  },
 
  {
    id: 2,
    title: "Weather App",
    category:"Frontend",
    description:
      "A real-time weather app showing temperature, humidity, and conditions using OpenWeather API.",
    tech: ["React", "JavaScript", "API", "CSS"],
    image:weather ,
    github: " https://github.com/Praveenkumar663/react-weather-app", 
    live: "https://weather-app-pi-mauve-95.vercel.app/",
  },
   {
    id: 3,
    title: "Portfolio Website",
    category:"Frontend",
    description:
      "My personal portfolio showcasing skills, projects, and resume with a responsive design.",
    tech: ["React", "Bootstrap", "CSS"],
    image: portfolio,
    github: "https://github.com/Praveenkumar663/new-portfolio",
    live: "https://praveenkumar-orcin.vercel.app/", 
  },
  {
    id: 4,
    title: "MoviHunt",
    category:"Frontend",
    description:
      "A movie search app to explore details like ratings, cast, and reviews using a movie API.",
    tech: ["React", "JavaScript", "API", "Bootstrap"],
    image: movie,
    github: "https://github.com/Praveenkumar663/moviehunt", 
    live: "https://moviehunts-five.vercel.app/", 
  },
  {
    id: 5,
    title: "Project Management System ",
    category:"Backend",
    description:
      "Backend system with CRUD APIs for managing projects and tasks, built with Node.js & MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    image: project,
    github: "https://github.com/Praveenkumar663/project-management-backend", 
    live: "", 
  },

   {
    id: 6,
    title: "AI-Powered Virtual Try-On System ",
    category:"Full stack",
    description:
      "A computer vision platform utilizing real-time video streams and body-tracking algorithms to seamlessly overlay apparel and accessories.",
    tech: ["Python","Flask","Mediapipe","OpenCV","Mysql","HTML","CSS","Bootstrap 5"],
    image:AI,
    github: "https://github.com/Praveenkumar663/AI-Powered-VIRTUAL-TRY-ON-", 
    live: "", 
  },

   {
    id: 7,
    title: "Flight Booking System ",
    category:"Full stack",
    description:
      "A web-based Flight Booking System built using Django.",
    tech: ["Python","Django","SQLite","HTML","CSS","Bootstrap 5"],
    image:flight,
    github: "https://github.com/Praveenkumar663/flight-booking-system", 
    live: "", 
  },
   {
    id: 8,
    title: "ShopSphere –  E-Commerce Website",
    category:"Full stack",
    description:
      "ShopSphere is a full-stack e-commerce web application built with Django.",
    tech: ["Python","Django","SQLite","HTML","CSS","Bootstrap 5"],
    image:shopshere,
    github: "https://github.com/Praveenkumar663/ShopSphere-E-Commerce-Website", 
    live: "", 
  },
 
  
];


