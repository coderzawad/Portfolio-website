import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

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
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
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

const technologies: TTechnology[] = [
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2024 - Present",
    points: [
      "Spearheaded the development of dynamic and responsive web applications using React.js.",
      "Built a comprehensive full-stack birthday collector app, incorporating authentication and advanced backend functionalities.",
      "Ensured a seamless user experience by implementing responsive design techniques and robust authentication systems.",
    ],
  },
  
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Specialized in developing and maintaining web solutions with a focus on React.js.",
      "Created scalable full-stack applications with integrated authentication and backend complexity.",
      "Enhanced the user experience through the development of responsive interfaces and authentication mechanisms.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developed cutting-edge web applications using React.js and related technologies.",
      "Implemented a full-stack birthday collector app with sophisticated authentication and backend processes.",
      "Focused on optimizing user experience with responsive design and secure authentication features.",
    ],
  },
];

const projects: TProject[] = [
  {
    name: "Book management",
    description:
      "A web application that allows users to effortlessly catalog and manage their favorite books. With the capability to create extensive collections, this app is ideal for book enthusiasts and libraries alike.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      ],
    image: carrent,
    sourceCodeLink: "",
  },
  {
    name: "Comming soon",
    description:
      "An intuitive job search platform that enables users to find job opportunities, estimate salary ranges, and locate positions based on geographical location, all through a user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "",
  },
  {
    name: "Comming soon",
    description:
      "A versatile travel booking application that simplifies the process of booking flights, hotels, and rental cars. It offers tailored recommendations for popular destinations, making it a one-stop solution for travelers.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "",
  },
];

export { services, technologies, experiences, projects };