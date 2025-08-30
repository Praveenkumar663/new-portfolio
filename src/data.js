
import { FaCode, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaDatabase, FaTools, FaJava, FaPython } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiMysql, SiPostman, SiGit, SiFigma, SiC, SiCplusplus } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";




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
  titleIcon: FaCode,
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

