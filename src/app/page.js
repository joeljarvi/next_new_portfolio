"use client";

import Header from "./components/Header";
import { MyPortfolioContext } from "./context/PortfolioContext";
import { useContext } from "react";
import ProjectList from "./components/ProjectList";

import Footer from "./components/Footer";

export default function Page() {
  const { projects, setProjects } = useContext(MyPortfolioContext);
  return (
    <div>
      <Header />

      {/* <section id="heroContainer" className="w-screen min-h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="font-super text-2xl lg:text-6xl">
            Joel Järvi is a Front End Developer based in Stockholm.
          </h1>
        </div>
      </section> */}
      <ProjectList />
    </div>
  );
}
