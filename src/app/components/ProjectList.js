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
      <div className="pt-20 overflow-x-auto grid-cols-6 w-full">
        <div id="titles" className="w-full table grid grid-cols-6 gap-4 mb-8">
          <h2 className="col-start-1 font-super text-xl -mb-1 hover:text-primary hover:cursor-pointer">
            Project
          </h2>
          <h2 className="col-start-3 font-super text-xl -mb-1  hover:text-primary hover:cursor-pointer">
            Stack
          </h2>
          <h2 className="col-start-6 font-super text-xl -mb-1  hover:text-primary hover:cursor-pointer">
            Year
          </h2>
        </div>

        <div>
          <div
            id="row-1"
            className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
            onClick={() => handleRowClick(0)}
          >
            <h2 className="col-start-1 col-span-2 font-super text-xl">
              Lady Chat
            </h2>
            <h2 className="col-start-3 col-span-2 font-super text-xl">
              next.js, Gemini AI
            </h2>
            <h2 className="col-start-6 font-super text-xl">2024</h2>
          </div>
          <div className="w-full border border-b-0 border-neutral my-2"></div>
          {activeIndex === 0 && <ProjectItem projectIndex={activeIndex} />}{" "}
        </div>

        <div>
          <div
            id="row-2"
            className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
            onClick={() => handleRowClick(1)}
          >
            <h2 className="col-start-1 col-span-2 font-super text-xl">
              Another Project
            </h2>
            <h2 className="col-start-3 col-span-3 font-super text-xl">
              node.js, MongoDB
            </h2>
            <h2 className="col-start-6 font-super text-xl">2023</h2>
          </div>
          <div className="w-full border border-b-0 border-neutral my-2"></div>
          {activeIndex === 1 && <ProjectItem projectIndex={activeIndex} />}{" "}
        </div>

        <div>
          <div
            id="row-2"
            className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
            onClick={() => handleRowClick(1)}
          >
            <h2 className="col-start-1 font-super text-xl">Life</h2>
            <h2 className="col-start-3 col-span-3 font-super text-xl">
              html, css
            </h2>
            <h2 className="col-start-6 font-super text-xl">2022</h2>
          </div>
          <div className="w-full border border-b-0 border-neutral my-2"></div>
          {activeIndex === 1 && <ProjectItem projectIndex={activeIndex} />}{" "}
        </div>

        <div>
          <div
            id="row-2"
            className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
            onClick={() => handleRowClick(1)}
          >
            <h2 className="col-start-1 font-super text-xl">Nothing</h2>
            <h2 className="col-start-3 col-span-3 font-super text-xl">c#</h2>
            <h2 className="col-start-6 font-super text-xl">2020</h2>
          </div>
          <div className="w-full border border-b-0 border-neutral my-2"></div>
          {activeIndex === 1 && <ProjectItem projectIndex={activeIndex} />}{" "}
        </div>

        <div>
          <div
            id="row-2"
            className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
            onClick={() => handleRowClick(1)}
          >
            <h2 className="col-start-1 font-super text-xl">Extra</h2>
            <h2 className="col-start-3 col-span-3 font-super text-xl">
              Vue.js, Svelt, Figma
            </h2>
            <h2 className="col-start-6 font-super text-xl">2021</h2>
          </div>
          <div className="w-full border border-b-0 border-neutral my-2"></div>
          {activeIndex === 1 && <ProjectItem projectIndex={activeIndex} />}{" "}
        </div>
      </div>
    </section>
  );
}
