"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import { MyPortfolioContext } from "./context/PortfolioContext";
import { useContext, useState } from "react";
import ProjectItem from "./components/ProjectItem";
import ProjectList from "./components/ProjectList";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollToPlugin);

export default function Page() {
  const { projects, setProjects } = useContext(MyPortfolioContext);
  return (
    <div>
      <Header />
      <section
        id="heroContainer"
        className="w-screen min-h-screen flex justify-center items-start lg:items-center"
      >
        <div className="flex justify-start items-start pt-32 px-8 pb-8 flex-wrap lg:px-36 lg:items-start lg:pt-8 gap-y-8">
          <h1 className="font-souvenir text-3xl lg:text-6xl">
            Joel Järvi is a Front End Developer based in Stockholm(SWE).
          </h1>
          <span className="flex flex-wrap items-start justify-start gap-x-2">
            <h2 className="font-souvenir text-3xl lg:text-6xl">
              He is passionate about creating fun and accessible UI solutions,
              meeting new people and music.
            </h2>{" "}
          </span>
          <span className="flex flex-wrap items-start justify-start gap-x-2 lg:gap-x-5">
            <h2 className="font-souvenir text-3xl lg:text-6xl">See his</h2>
            <Link href="#">
              <h3 className="mt-1 font-gemini text-4xl lg:text-7xl items-center hover:text-primary">
                Portfolio
              </h3>
            </Link>
            <h2 className="font-souvenir text-3xl lg:text-6xl">below</h2>
          </span>
        </div>
      </section>
      <ProjectList />
    </div>
  );
}
