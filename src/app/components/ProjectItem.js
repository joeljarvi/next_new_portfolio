"use client";
import { useContext } from "react";
import { MyPortfolioContext } from "../context/PortfolioContext";

export default function ProjectItem({ projectIndex }) {
  const { projects } = useContext(MyPortfolioContext);

  const project = projects[projectIndex];

  if (!project) {
    return <p>Project not found</p>; // Display a fallback message if the project does not exist
  }

  return (
    <div className="-mt-2 lg:-mt-0 mb-2 w-full grid grid-cols-6 gap-4 h-auto pt-4 pb-4 rounded-xl">
      <p className="col-start-1 row-start-1 row-span-3 lg:row-span-1 col-span-6 lg:col-span-4 font-super text-xl lg:text-4xl leading-6 lg:leading-9 lg:mb-4">
        {project.description}
      </p>

      <div className="col-start-1 col-span-6 row-start-5 lg:row-start-2 row-span-1 flex items-start">
        <a href={project.link}>
          <button className="btn lg:btn-lg btn-accent rounded-full text-lg font-super lg:text-xl  tracking-wide lg:mb-4">
            See Website
          </button>
        </a>
      </div>

      <img
        src={project.image}
        width="1920"
        height="1080"
        className="col-start-1 col-span-6 lg:col-span-3 row-start-6 lg:row-start-3 row-span-1 lg:row-span-2 rounded-sm"
        alt="project"
      />
      <img
        src={project.image}
        width="1920"
        height="1080"
        className="hidden lg:block col-start-4 col-span-2 lg:col-span-3 row-start-6 lg:row-start-3 row-span-2 rounded-sm"
        alt="project"
      />
      {/* <img
        src={project.image}
        width="1920"
        height="1080"
        className="hidden lg:block col-start-5 col-span-2 row-start-6 lg:row-start-3 row-span-2 rounded-sm"
        alt="project"
      /> */}
    </div>
  );
}
