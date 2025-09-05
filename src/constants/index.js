import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp"; // you can replace this with an image for your npm package
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

// Hero section about you
export const HERO_CONTENT = `Hi, I am Vinay Kumar, a passionate full stack developer specializing in building modern and scalable web applications. I have experience in front-end frameworks like React and Next.js, and back-end technologies such as Node.js, Express, MongoDB, and MySQL. I love creating seamless user experiences and efficient code that solves real-world problems.`;

// About section about you
export const ABOUT_TEXT = `I am Vinay Kumar, a dedicated full stack developer with a love for coding and problem-solving. Over the years, I have built web applications using React, Next.js, Node.js, MongoDB, and MySQL. I enjoy turning ideas into functional software while continuously learning new technologies. I thrive in collaborative environments and aim to deliver high-quality solutions that make a difference.`;

// Your work experiences
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    description: `Developed full-stack web applications using React, Next.js, and Node.js. Implemented REST APIs, user authentication, and database management with MongoDB and MySQL. Worked on responsive UI and optimized web performance.`,
    technologies: ["JavaScript", "React", "Next.js", "Node.js", "MongoDB", "MySQL"],
  },
  {
    year: "2021 - 2023",
    role: "Frontend Developer",
    company: "Freelance / Open Source Contributions",
    description: `Designed and built interactive user interfaces using React and Next.js. Collaborated with backend developers to integrate APIs. Improved accessibility, responsiveness, and website performance.`,
    technologies: ["React", "Next.js", "HTML", "CSS", "TailwindCSS"],
  },
];

// Your projects
export const PROJECTS = [
  {
    title: "Filespire - File Sharing Platform",
    image: project1,
    description:
      "A platform for uploading and sharing files securely with features like link sharing, QR code generation, and email-based sharing.",
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Express"],
  },
  {
    title: "Auto Reload NPM Package",
    image: project2, // Replace with custom image if available
    description:
      "An npm package that automatically reloads a rendered website every 15 minutes to prevent the deployed site from going down.",
    technologies: ["Node.js", "JavaScript", "npm"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Personal portfolio website showcasing my projects, skills, and contact information.",
    technologies: ["React", "Next.js", "TailwindCSS", "JavaScript"],
  },
  {
    title: "Word to PDF Converter",
    image: project4,
    description:
      "A simple web tool to convert Word documents into PDF, integrated into Filespire for seamless user experience.",
    technologies: ["React", "Node.js", "Express", "JavaScript"],
  },
];

// Contact section - empty for privacy
export const CONTACT = {
  address: "",
  phoneNo: "",
  email: "",
};
