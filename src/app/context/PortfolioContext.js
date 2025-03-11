"use client";
import { createContext, useState, useEffect } from "react";

export const MyPortfolioContext = createContext([]);

export default function PortfolioContext({ children }) {
  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      title: "DOGINDEX",
      description: "A site dedicated to dogs, everyone loves dogs",
      category: ["Development", "Design"],
      stack: ["Next.js", "React", "Dog API", "tailwindcss"],
      year: 2025,
      link: "https://chas-news-app.vercel.app/",
      image:
        "https://www.assuropoil.fr/wp-content/uploads/2023/07/avoir-un-chat-sante.jpg",
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
