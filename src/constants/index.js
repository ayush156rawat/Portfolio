import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    threejs,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "NestJS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Python Developer",
      company_name: "Onlei Technology",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Cognizant",
      icon: meta,
      iconBg: "#383E56",
      date: "April 2023 - july 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer Internship Course ",
      company_name: "Skill Academy , Textbook",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "October 2023 - November 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
    title: "Junior Full Stack Developer",
    company_name: "Xcrino Business Solutions",
    icon: meta,
    iconBg: "#2A2F4F",
    date: "Apr 2024 - Nov 2024",
    points: [
      "Developed end-to-end features using MERN, Next.js, and NestJS.",
      "Designed responsive UI screens and built reusable components.",
      "Implemented APIs, authentication, roles & permissions, and database models.",
      "Improved code quality, debugging speed, and overall performance of the product.",
      "Collaborated closely with the team to deliver production-ready modules on time.",
    ],
  },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Ayush genuinely cares about client success — rare to find.",
      name: "Mr.Nitesh Sharma",
      designation: "Digital Head",
      company: "Nykaa",
    },
    {
      testimonial:
        "Ayush brings both skill and sincerity to every project.",
      name: " Ms.Tehreem",
      designation: "Human Resource Manager",
      company: "Xcrino Business Solutions",
    },
    {
      testimonial:
        "Working with Ayush feels like having a partner, not just a developer.",
      name: "Mr.Monis Siddiqui",
      designation: "Senior Developer",
      company: "Xcrino Business Solutions",
    },
  ];
  
  const projects = [
    {
      name: "Simon Game",
      description:"allow user to check there remembering skills and for children competetive purpose",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "HTML, CSS and JavaScript", 
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://ayush-simon-game.netlify.app/",
    },
    {
      name: "GPT-3 Frontend",
      description:"To create an Attractive User Interface",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://reactgpt4.netlify.app/",
    },
    {
      name: "Task Management",
      description:
        "A comprehensive task management platform that allows users to create, assign, and track tasks, as well as collaborate with team members.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://tasksetu-v1.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
