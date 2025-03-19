"use client";
import { createContext, useState, useEffect } from "react";

export const MyPortfolioContext = createContext([]);

export default function PortfolioContext({ children }) {
  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      title: "DOGINDEX",
      description: "A site dedicated to dogs, everyone loves dogs",
      category: ["Development", ", ", "Design"],
      stack: ["Next.js", "React", "Dog API", "tailwindcss"],
      year: 2025,
      link: "https://chas-news-app.vercel.app/",
      image1: "",

      image2: "",
      image3: "",

      button: "See Website",
    },
    {
      id: Date.now(),
      title: "elinorsilow.com",
      description:
        "Website design for mixed media artist Elinor Silow. Designed and developed using Elementor Pro and Wordpress",
      category: ["Design", ", ", "Digital"],
      stack: ["Elementor Pro", "Wordpress"],
      year: 2024,
      link: "https://wwww.elinorsilow.com/",
      image1:
        "https://res.cloudinary.com/duwvqjipi/image/upload/v1742379756/Ska%CC%88rmavbild_2025-03-11_kl._15.56.23_w40lin.png",
      image2:
        "https://res.cloudinary.com/duwvqjipi/image/upload/v1742379754/Ska%CC%88rmavbild_2025-03-11_kl._15.55.57_jdizod.png",
      image3:
        "https://res.cloudinary.com/duwvqjipi/image/upload/v1742379758/Ska%CC%88rmavbild_2025-03-11_kl._15.54.38_b9myok.png",
      button: "See Website",
    },
  ]);

  // Load projects from localStorage when component mounts
  useEffect(() => {
    // Ensure this code only runs on the client-side
    if (typeof window !== "undefined") {
      try {
        // Load data from localStorage on initial render
        const savedProjects =
          JSON.parse(localStorage.getItem("projects")) || [];
        setProjects(savedProjects); // Set the projects state with saved data
      } catch (error) {
        console.error("Error loading projects from localStorage:", error);
      }
    }
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    // Ensure this code only runs on the client-side
    if (typeof window !== "undefined") {
      try {
        // Save the projects data to localStorage whenever it changes
        if (projects.length > 0) {
          localStorage.setItem("projects", JSON.stringify(projects));
        }
      } catch (error) {
        console.error("Error saving projects to localStorage:", error);
      }
    }
  }, [projects]);

  return (
    <MyPortfolioContext.Provider value={{ projects, setProjects }}>
      {children}
    </MyPortfolioContext.Provider>
  );
}
