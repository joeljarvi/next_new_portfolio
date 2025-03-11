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
    <section id="projects-container" className="w-screen min-h-screen px-4">
      <div
        id="titles"
        className="pt-28 w-full table grid grid-cols-6 gap-4 mb-14"
      >
        <h2 className="col-start-1 font-super text-xl -mb-1 hover:text-primary hover:cursor-pointer">
          Project
        </h2>
        <h2 className="col-start-3 col-span- font-super text-xl -mb-1 lg:col-start-2 hover:text-primary hover:cursor-pointer">
          Category
        </h2>
        <h2 className="hidden lg:block font-super text-xl -mb-1 lg:col-start-4 hover:text-primary hover:cursor-pointer">
          Stack
        </h2>
        <h2 className="col-start-6 font-super text-xl -mb-1 hover:text-primary hover:cursor-pointer ">
          Year
        </h2>
      </div>

      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <div
              id={`row-${index}`}
              className="w-full table grid grid-cols-6 gap-4 hover:text-primary hover:cursor-pointer"
              onClick={() => handleRowClick(index)}
            >
              <h2 className="col-start-1 col-span-2 lg:col-span-1 font-super text-xl">
                {project.title}
              </h2>
              <h2 className="col-start-3 lg:col-start-2 col-span-3 lg:col-span-2  font-super text-xl">
                {project.category[0]}, {project.category[1]}
              </h2>
              <h2 className="hidden lg:block col-start-3 col-span-2 lg:col-span-2 font-super text-xl">
                {project.stack[0]}, {project.stack[1]}, {project.stack[2]}
              </h2>

              <h2 className="col-start-6 font-super text-xl">{project.year}</h2>
            </div>
            <div className="w-full border border-b-0 border-neutral my-2"></div>
            {activeIndex === index && (
              <ProjectItem projectIndex={activeIndex} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
