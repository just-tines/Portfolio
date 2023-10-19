import React from "react";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import javascript from "../assets/js.jpg";
import Reactjs from "../assets/react.jpg";
import tailwindcss from "../assets/tailwind.jpg";
import bootstrap from "../assets/bootstrap.jpg";
import php from "../assets/php.jpg";
import git from "../assets/git.jpg";
import mysql from "../assets/mysql.jpg";

const skills = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-800",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: Reactjs,
    title: "React.js",
    style: "shadow-violet-600",
  },
  {
    id: 5,
    src: tailwindcss,
    title: "Tailwind CSS",
    style: "shadow-blue-500",
  },
  {
    id: 6,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-pink-400",
  },
  {
    id: 7,
    src: php,
    title: "PHP",
    style: "shadow-violet-300",
  },
  {
    id: 8,
    src: git,
    title: "Git",
    style: "shadow-gray-800",
  },
  {
    id: 9,
    src: mysql,
    title: "MySQL",
    style: "shadow-yellow-200",
  },
];

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-white to-gray-400 w-full">
      <div className="max-w-screen-lg mx-auto py-4 flex flex-col justify-center w-full h-full text-black">
        <div className="justify-center my-7 text-center">
          <p className="text-4xl font-bold border-b-2 border-gray-500 p-2">
            Web Development Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md duration-500 py-2 rounded-lg font-bold ${style}`}>
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
