"use client";
import { useContext, useState } from "react";
import ProjectItem from "./ProjectItem";
import { MyPortfolioContext } from "../context/PortfolioContext";

export default function ProjectList() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { projects, setProjects } = useContext(MyPortfolioContext);

  const handleRowClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="projects-container" className="w-screen min-h-screen ">
      <div
        id="titles"
        className="pt-14 w-full table grid grid-cols-6 gap-4 pb-2"
      >
        <h2 className="col-start-1 font-super text-xl  hover:text-base-300 cursor-pointer pl-4 ">
          Project
        </h2>
        <h2 className="col-start-3 col-span-1 font-super text-xl lg:col-start-2 hover:text-base-300 cursor-pointer">
          Category
        </h2>
        <h2 className="hidden lg:block font-super text-xl  lg:col-start-4 hover:text-base-300 cursor-pointer">
          Stack
        </h2>
        <h2 className="col-start-6 font-super text-xl hover:text-base-300 cursor-pointer ">
          Year
        </h2>
      </div>

      <div className="w-full border-t border-neutral ">
        {projects.map((project, index) => (
          <div key={index}>
            <div
              id={`row-${index}`}
              className={`w-full table grid grid-cols-6 gap-x-4 hover:bg-base-300 cursor-pointer rounded-none leading-tight py-2 border-b border-neutral ${
                activeIndex === index ? "bg-base-300" : "bg-white"
              }`}
              onClick={() => handleRowClick(index)}
            >
              <h2 className="col-start-1 col-span-2 lg:col-span-1 font-super text-xl pl-4">
                {project.title}
              </h2>
              <h2 className="col-start-3 lg:col-start-2 col-span-3 lg:col-span-2  font-super text-xl ">
                {project.category}
              </h2>
              <h2 className="hidden lg:block col-start-3 col-span-2 lg:col-span-2 font-super text-xl">
                {project.stack[0]}, {project.stack[1]}, {project.stack[2]}
              </h2>

              <h2 className="col-start-6 font-super text-xl">{project.year}</h2>
            </div>
            <div></div>
            {activeIndex === index && (
              <ProjectItem projectIndex={activeIndex} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
