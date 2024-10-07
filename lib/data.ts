import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import dotsandcoms from "@/public/dotscoms.webp";
import idx from "@/public/idx-logo.png";
import tcs from "@/public/Tata_Consultancy_Services_Logo.svg";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  
] as const;

export const experiencesData = [
  {
    title: "Jr. Android Developer",
    location: "Dots And Coms Vadodara, India ",
    description:
      "Contributed as a Junior Android Developer in end-to-end integration and enhancement of a legacy product, translating requirements into model diagrams and process charts. Proficient in task allocation, UI development across mobile platforms,and ensuring seamless deployment on Play Store",
    icon: React.createElement(LuGraduationCap),
    date: "June 2013 – Mar 2014",
  },
  {
    title: "App UI Developer",
    location: "Investis Digital Pvt Ltd, Vadodara, Gujarat, India",
    description:
      "Accomplished professional with expertise in the full software development lifecycle, encompassing design, implementation, testing, and maintenance of legacy products. Demonstrated proficiency in Android and JavaScript, with a focus on cross-platform development for Android and iOS applications. Proven ability in client communication and support, including liaison with London DCMs and clients for support requests. Experienced in UI design using JavaScript and AngularJS for Myinvestis product. Skilled in SCSS and gulp setup for Drupal platforms, including automation for CSS compilation across multiple environments. Strong background in addressing cross-browser compatibility issues and optimizing web performance.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2014 – Aug 2018",
  },
  {
    title: "Full-Stack Developer",
    location: "Tata Consultancy Services Pvt Ltd, Gandhinagar, Gujarat, India",
    description:
      "Experienced in full-stack web development, specializing in React and Vue.js frameworks. Proficient in creating and maintaining SPAs with HTML5, CSS3, and Sass. Skilled in configuring build processes with Webpack, Gulp, Grunt, and Docker for efficient deployment. Proficient in Agile Scrum methodology, managing tasks with Jira.Developed reusable TypeScript components and services for REST API consumption. Experienced with version control using GitHub and Git Bash. Leveraged AWS and Azure for CI/CD pipelines. Strong emphasis on responsive design with Bootstrap and adept at resolving cross-browser compatibility issues.",
    icon: React.createElement(FaReact),
    date: "Aug 2018– Current",
  },
] as const;

export const projectsData = [
  {
    title: "https://react-vitejs-demo-project.vercel.app",
    description:
      "Project Setup & Folder Structure -Building the Responsive Layout   -Styling with Tailwind CSS  Implementing Framer Motion Animations -Final Touches & Deployment ",
    tags: [" React.js" ,"Vite js", "Framer Motion" ,"Tailwind.CSS"],
    imageUrl: dotsandcoms,
  },
  {
    title:  "https://developer-portfolio-react-nextjs-twindcss.vercel.app",
    description:
      "Next.js App Router Next.js Server Actions Client & Server Components TypeScript (Beginner & Intermediate) Tailwind CSS Context API Advanced Animations with Framer Motion Custom React hooks Fresh, modern UI design Responsive website",
    tags: ["React.js","Next.js (App Router & Server Actions)", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel hosting"],
    imageUrl: idx,
  },
  {
    title: "https://zustand-example-swart.vercel.app/",
    description:
      "Learning Purpose used placeholder user api and learnt how to mange state with zustand Library.",
    tags: ["React State management Library zustand", "Vercel hosting"],
    imageUrl: tcs,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind", 
  "MongoDB",  
  "Express",
  "PostgreSQL", 
  "Framer Motion",
  "AWS Service",
] as const;
