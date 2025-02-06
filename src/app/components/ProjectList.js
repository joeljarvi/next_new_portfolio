"use client";
import { useState } from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleRowClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="projects-container" className="w-screen min-h-screen px-4">
      <div className="pt-20 lg:pt-24 overflow-x-auto grid-cols-6 w-full">
        <table id="titles" className="w-full table grid grid-cols-6 gap-4">
          <h2 className="pl-2 col-start-1 font-gemini text-4xl -mb-1 lg:text-7xl hover:text-primary hover:cursor-pointer">
            Project
          </h2>
          <h2 className="col-start-3 font-gemini text-4xl -mb-1 lg:text-7xl hover:text-primary hover:cursor-pointer">
            Techstack
          </h2>
          <h2 className="col-start-6 font-gemini text-4xl -mb-1 lg:text-7xl hover:text-primary hover:cursor-pointer">
            Year
          </h2>
        </table>
        <div className="divider divider-2 divider-neutral col-start-1 col-span-6 lg:mt-32 mb-0"></div>

        <div>
          <table
            id="row-1"
            className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
            onClick={() => handleRowClick(0)}
          >
            <h2 className="col-start-1 font-souvenir text-2xl">Lady Chat</h2>
            <h2 className="col-start-3 col-span-3 font-souvenir text-2xl">
              next.js, Gemini AI, tailwindcss
            </h2>
            <h2 className="col-start-6 font-souvenir text-2xl">2024</h2>
          </table>
          <div className="divider divider-2 divider-neutral col-start-1 col-span-6 mt-0 mb-0"></div>
          {activeIndex === 0 && <ProjectItem projectIndex={activeIndex} />}{" "}
        </div>

        <div>
          <table
            id="row-2"
            className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
            onClick={() => handleRowClick(1)}
          >
            <h2 className="col-start-1 font-souvenir text-2xl">
              Another Project
            </h2>
            <h2 className="col-start-3 col-span-3 font-souvenir text-2xl">
              node.js, MongoDB
            </h2>
            <h2 className="col-start-6 font-souvenir text-2xl">2023</h2>
          </table>
          <div className="divider divider-2 divider-neutral col-start-1 col-span-6 mt-0 mb-0"></div>
          {activeIndex === 1 && <ProjectItem projectIndex={activeIndex} />}{" "}
        </div>

        <div>
          <table
            id="row-2"
            className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
            onClick={() => handleRowClick(1)}
          >
            <h2 className="col-start-1 font-souvenir text-2xl">Life</h2>
            <h2 className="col-start-3 col-span-3 font-souvenir text-2xl">
              html, css
            </h2>
            <h2 className="col-start-6 font-souvenir text-2xl">2022</h2>
          </table>
          <div className="divider divider-2 divider-neutral col-start-1 col-span-6 mt-0 mb-0"></div>
          {activeIndex === 1 && <ProjectItem projectIndex={activeIndex} />}{" "}
        </div>

        <div>
          <table
            id="row-2"
            className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
            onClick={() => handleRowClick(1)}
          >
            <h2 className="col-start-1 font-souvenir text-2xl">Nothing</h2>
            <h2 className="col-start-3 col-span-3 font-souvenir text-2xl">
              c#
            </h2>
            <h2 className="col-start-6 font-souvenir text-2xl">2020</h2>
          </table>
          <div className="divider divider-2 divider-neutral col-start-1 col-span-6 mt-0 mb-0"></div>
          {activeIndex === 1 && <ProjectItem projectIndex={activeIndex} />}{" "}
        </div>

        <div>
          <table
            id="row-2"
            className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
            onClick={() => handleRowClick(1)}
          >
            <h2 className="col-start-1 font-souvenir text-2xl">Extra</h2>
            <h2 className="col-start-3 col-span-3 font-souvenir text-2xl">
              Vue.js, Svelt, Figma
            </h2>
            <h2 className="col-start-6 font-souvenir text-2xl">2021</h2>
          </table>
          <div className="divider divider-2 divider-neutral col-start-1 col-span-6 mt-0 mb-0"></div>
          {activeIndex === 1 && <ProjectItem projectIndex={activeIndex} />}{" "}
        </div>
      </div>
    </section>
  );
}
