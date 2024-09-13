"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my Master of Science in{" "}
        <span className="font-medium">Software Technologies</span>, I embarked
        on my career as a{" "}
        <span className="font-medium">Junior Android Developer</span> and
        steadily grew into a{" "}
        <span className="font-medium">Front-End Developer</span> specializing in{" "}
        <span className="font-medium">full-stack web development</span>. With a
        strong foundation in{" "}
        <span className="font-medium">React, Next.js, Vue.js</span>, and modern
        web technologies like{" "}
        <span className="font-medium">
          HTML5, CSS3, JavaScript, and TypeScript
        </span>
        , I have honed my skills in{" "}
        <span className="font-medium">
          state management, REST API integration, and responsive design
        </span>
        .
      </p>
      <p className="mb-3">
        I am proficient in using tools such as{" "}
        <span className="font-medium">Git, Jira, and CI/CD pipelines</span> with{" "}
        <span className="font-medium">AWS and Azure</span>, and I have
        successfully managed both small and large-scale projects while applying{" "}
        <span className="font-medium">agile methodologies</span>. My
        professional journey has instilled in me a passion for{" "}
        <span className="italic">problem-solving</span>, producing clean,
        efficient code, and staying current with evolving technology trends.
      </p>
      <p className="mb-3">
        In addition to my technical expertise, I bring strong{" "}
        <span className="font-medium">adaptability</span>, a{" "}
        <span className="font-medium">sense of responsibility</span>, and a
        track record of being both a{" "}
        <span className="font-medium">team player</span> and{" "}
        <span className="font-medium">team leader</span>. I excel at{" "}
        <span className="font-medium">
          time management, organizational skills
        </span>
        , and <span className="font-medium">communication</span>, with a high
        level of <span className="font-medium">attention to detail</span> and{" "}
        <span className="font-medium">technical writing ability</span>. My
        ability to work both <span className="italic">independently</span> and
        collaboratively, combined with my{" "}
        <span className="font-medium">self-motivation</span>, ensures that I
        meet deadlines and deliver quality results.
      </p>
      <p className="mb-3">
        I am actively seeking a{" "}
        <span className="font-medium">
          full-time software development position
        </span>
        where I can leverage my experience and professional attributes to
        contribute to meaningful projects.
      </p>
      <p>
        <span className="italic">When I’m not coding</span>, I enjoy{" "}
        <span className="font-medium">drawing, canvas painting</span>, and
        staying active by playing{" "}
        <span className="font-medium">badminton and cooking food</span>.
      </p>
    </motion.section>
  );
}
