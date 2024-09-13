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
    title: "Android App development Projects",
    description:
      "●	Involved in understanding the requirements and putting them into model’s diagrams, process/flow charts.●	Worked on the Designing end to end integration of the Android mobile application deployed on Play store.●	Involved in identifying and assigning the task based on the skill-set available in the team.●	Involved in Development, implementation, testing and maintaining of various enhancement of the legacy product.●	Good hands-on experience in UI development for all the mobile platforms.",
    tags: ["HTML3", "CSS3", "JavaScript", "Android SDK 2.3 - 10.3", "Eclipse",  "Phone gap"],
    imageUrl: dotsandcoms,
  },
  {
    title: "Web and App development",
    description:
      "●	Involved in Development, implementation, testing and maintaining of various enhancement of the legacy product built on android ,Javascript.●	App v2,v3 product build and development experience(cross platform App build android and IOS) -2.8 years●	Communication with London DCMs and clients for Support requests.●	App Support request ●	Myinvestis product UI designing experience with JavaScript and Angular JS-10 months ●	Involved in  SCSS and gulp setup for drupal platform.I have created automation for css compilation on three different environments like production ,stage, local.all automation task done 3 environments according to different requirements.●	Strong experience with Cross Browser Compatibility issues and Optimization for web.",
    tags: ["HTML5", "CSS3", "Typescript", "Bootstrap","Android", "Javascript", "Angular JS","gulp","webpack","grunt"],
    imageUrl: idx,
  },
  {
    title: "Front-end development project",
    description:
      "● Involved in Development, implementation, testing and maintaining of various enhancement of the legacy product built on React , Vue js.●	Developing Rich UI SPA using HTML 5, CSS 3.0, SaaS, Bootstrap, Vue js, React JS●	Involved in working with Node modules to create a SPA.●	Hands on experience using grid for managing Data Tables.●	Worked on webpack /gulp /grunt /docker configuration for building and deploying UI applications.●	Involved in Bug fixing of various modules that were raised by the testing teams in the application during the Integration testing phase.●	Used the Agile scrum /Jira as a software development process.●	Worked with the team to deliver the assigned modules and push it to QA and production environment.●	Created TypeScript reusable components and services to consume REST API's using Component based architecture provided by React and Node js services. ●	Used GitHub, Git bash to commit changes to the repository for maintaining various versions.●	Used AWS /Azure for build Process to Generate Continuous Integration and Version Control is done by GIT.●	Making applications responsive and adaptive by adding Bootstrap.●	Strong experience with Cross Browser Compatibility issues and Optimization for web.",
    tags: ["HTML5", "CSS3", "SaaS", "Typescript", "Bootstrap","React js","ES6", "Unit testing (Mocha)","Vue js", "Next.js", "SQL", "Tailwind", "Framer motion"],
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
