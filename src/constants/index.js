import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Android Studio",
    type: "Animation",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Web and Mobile Application Developer",
    company_name: "Hbarve Info Tech",
    // icon: ICON,
    iconBg: "#accbe1",
    date: "Feb 2022 - Mar 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "GO Shop",
    description:
      "An E-Commerce site using Strapi CMS with Strapi's admin panel to manage product listings, including adding, updating, and deleting products",
    link: "https://github.com/nischay-code/Replica-fk",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Fk-Replica",
    description:
      "The Replica-fk site aims to recreate the look and functionality of the popular e-commerce platform. Tech stack consists of HTML, CSS, and JavaScript",
    link: "https://github.com/nischay-code/Replica-fk",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Racing",
    description:
      "A basic car game project to learn about the javascript and CSS concepts that helps to build my skill set and core skill set in web development.",
    link: "https://github.com/nischay-code/racing_car",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Realtime Chat App",
    description:
      "Created a one-to-one chat application to connect with friends in a familiar social media environment using React Native.",
    link: "https://github.com/nischay-code/ReactNative_ChatApp",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "ResCure",
    description:
      "Native Application which provide medical ease in advance. It helps to reduce time complexity of a sudden medical situation caused by an accident.",
    link: "https://github.com/nischay-code/Website_ResCure",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "My Other Projects",
    description:
      "Live 30 Static Websites using HTML, CSS and JS and projects on React and React Native Apps like Food order app, Todo List and many more.",
    link: "https://github.com/nischay-code?tab=repositories",
  },
];
