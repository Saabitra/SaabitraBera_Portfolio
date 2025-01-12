import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import disastertracker from "../assets/projects/disaster-tracker.jpg";
import saabitraportfolio from "../assets/projects/saabitra-portfolio.jpg";
import weatheraireporter from "../assets/projects/weather-ai-reporter.jpg";

export const HERO_CONTENT = `I am a dedicated Full-Stack Developer specializing in building scalable, user-centric web applications. Proficient in ReactJS, NextJS, TailwindCSS, and JavaScript for the front end, I combine them with robust back-end technologies like Node.js, MySQL, and MongoDB to deliver seamless digital solutions. With a strong focus on UI/UX design and modern development practices, I strive to create exceptional user experiences that make a lasting impact.`;

export const ABOUT_TEXT = `I am a passionate and skilled Full-Stack Developer with a strong foundation in both frontend and backend technologies. Proficient in ReactJS, NextJS, and TailwindCSS, I create responsive, user-centric web applications with clean and efficient code. With expertise in HTML, CSS, JavaScript, Python, and SQL, I bring ideas to life, seamlessly integrating functionality and design.

Beyond development, I have a keen eye for UI/UX design, leveraging tools like Figma and Adobe Creative Suite to craft intuitive interfaces that enhance user experience. My problem-solving skills, critical thinking, and ability to work collaboratively in teams allow me to excel in fast-paced, challenging environments.

Outside of coding, I enjoy designing and developing creative web applications, capturing nature’s beauty through wildlife photography, and analyzing sports like Cricket and Formula 1. I also find inspiration in movies and motivational books, constantly seeking growth both personally and professionally.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Disaster Tracker",
    image: disastertracker,
    description:
      "A fully functioning disaster tracker website that tracks ongoing disasters, displays affected locations, and provides detailed statistics on property damage and casualties.",
    technologies: ["HTML", "CSS", "JavaScript", "Google Maps API", "NASA EONET API"],
  },
  {
    title: "Weather AI Reporter",
    image: weatheraireporter,
    description:
      "A fully functioning AI weather website that provides detailed weather reports, including temperature, UV index, sunrise and sunset times, with graphical and summarized forecasts.",
    technologies: ["NextJS", "TailwindCSS", "Tremor", "Open-Meteo API", "OpenAI API"],
  },
  {
    title: "Portfolio Website",
    image: saabitraportfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "94/46, Nayapatty Road, Vivekananda Abasan, Kolkata 700055, West Bengal, India",
  phoneNo: "+91 9748299429",
  email: "saabitrabera@gmail.com",
};
