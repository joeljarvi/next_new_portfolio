"use client";
import { useContext } from "react";
import Link from "next/link";
import { MyPortfolioContext } from "../context/PortfolioContext";
import Iframe from "react-iframe";

export default function ProjectItem({ projectIndex }) {
  const { projects } = useContext(MyPortfolioContext);

  const project = projects[projectIndex];

  if (!project) {
    return <p>Project not found</p>; // Display a fallback message if the project does not exist
  }

  return (
    <div>
      <div className="-mt-2 lg:-mt-2 mb-0 w-full h-2/3 grid grid-cols-6 gap-4 px-4 pt-4 lg:pt-6 pb-16 bg-base-200 border-b border-neutral">
        <p className="pt-2 col-start-1 col-span-6 lg:col-span-3 font-super text-xl lg:text-2xl leading-tight lg:pb-2">
          {project.description}
        </p>

        <Link
          href={project.link}
          className="col-start-1 col-span-2 lg:col-start-4 lg:col-span-1 flex items-start justify-start lg:pt-2 lg:pl-4"
        >
          <button className="btn bg-white rounded-full text-lg font-super tracking-wide">
            {project.button}
          </button>
        </Link>
        <div className="flex flex-row justify-start items-center lg:hidden col-start-3 col-span-6 font-mono text-sm pl-2">
          <ul>
            {project.stack[0]}, {project.stack[1]}{" "}
          </ul>
        </div>

        <div className="col-start-1 col-span-6 grid grid-cols-1 lg:grid-cols-6 w-full gap-2 px-4 pt-4">
          <img
            src={project.image1}
            className="col-start-1 col-span-1 lg:col-span-4"
          />
          <img
            src={project.image2}
            className="col-start-1 lg:col-start-5 col-span-1"
          />
          <img
            src={project.image3}
            className="col-start-1  lg:col-start-6 col-span-1 lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
