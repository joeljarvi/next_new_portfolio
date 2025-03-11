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
      <div className="-mt-2 lg:-mt-0 mb-2 w-full h-2/3 grid grid-cols-6 gap-4 pt-4 pb-4 rounded-xl">
        <p className="col-start-1 col-span-6 lg:col-span-3 font-super text-xl lg:text-4xl leading-6 lg:leading-9 lg:mb-4">
          {project.description}
        </p>

        <Link
          href={project.link}
          className="col-start-1 col-span-6 flex items-start"
        >
          <button className="btn btn-accent rounded-full text-lg font-super lg:text-base tracking-wide lg:mb-4">
            See Website
          </button>
        </Link>

        <Iframe
          src="https://chas-news-app.vercel.app/"
          width="100%"
          height="200%"
          className="col-start-1 col-span-6 lg:col-span-6 rounded-sm"
        />
      </div>
    </div>
  );
}
