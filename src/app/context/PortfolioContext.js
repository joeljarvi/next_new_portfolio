"use client";
import { createContext, useState, useEffect } from "react";

export const MyPortfolioContext = createContext([]);

export default function PortfolioContext({ children }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Lady Chat",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
      stack: "next.js, Gemini AI, tailwindcss",
      year: 2024,
      link: "https://google.com",
      image:
        "https://www.assuropoil.fr/wp-content/uploads/2023/07/avoir-un-chat-sante.jpg",
    },
    {
      id: 2,
      title: "Another Project",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa",
      stack: "React, Node.js, MongoDB",
      year: 2023,
      link: "https://example.com",
      image:
        "https://www.assuropoil.fr/wp-content/uploads/2023/07/avoir-un-chat-sante.jpg",
    },
    // other projects...
  ]);

  useEffect(() => {
    // Ensure this code only runs on the client-side
    if (typeof window !== "undefined") {
      try {
        // Load data from localStorage on initial render
        const savedProjects =
          JSON.parse(localStorage.getItem("projects")) || [];
        setProjects(savedProjects); // Set the projects state with saved data, or an empty array
      } catch (error) {
        console.error("Error loading projects from localStorage:", error);
        setProjects([]); // In case there's a parsing error, reset to empty array
      }
    }
  }, []);

  useEffect(() => {
    // Ensure this code only runs on the client-side
    if (typeof window !== "undefined") {
      try {
        // Save the projects data to localStorage whenever it changes
        localStorage.setItem("projects", JSON.stringify(projects));
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
