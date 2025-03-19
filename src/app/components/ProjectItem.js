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
      <div className="-mt-2 lg:-mt-0 mb-2 w-full h-2/3 grid grid-cols-6 gap-4 px-4 pt-4 pb-16 bg-base-200">
        <p className="col-start-1 col-span-6 lg:col-span-3 font-super text-xl lg:text-2xl leading-tight  ">
          {project.description}
        </p>
        <Link
          href={project.link}
          className="col-start-1 col-span-6 flex items-start"
        >
          <button className="btn bg-white rounded-full text-lg font-super lg:text-base tracking-wide">
            {project.button}
          </button>
        </Link>

        <div className="col-start-1 col-span-6 grid grid-cols-1 lg:grid-cols-6 w-full gap-2 px-8">
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
