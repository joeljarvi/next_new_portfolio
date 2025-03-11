"use client";

import Header from "../components/Header";
import { MyPortfolioContext } from "../context/PortfolioContext";
import { useContext, useState } from "react";
import Image from "next/image";

export default function Admin() {
  const { projects, setProjects } = useContext(MyPortfolioContext); // Extract context values
  const [loggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "joel",
    password: "joel123",
  });

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [newProjectItem, setNewProjectItem] = useState({
    title: "",
    description: "",
    year: "",
    stack: "",
    link: "",
    image: "",
    id: Date.now(),
  });

  function handleLogin() {
    if (
      credentials.username === inputUsername &&
      credentials.password === inputPassword
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  // Handle input change for new project
  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewProjectItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function addProject(event) {
    event.preventDefault();
    const updatedProjects = [...projects, newProjectItem];
    setProjects(updatedProjects);

    setNewProjectItem({
      title: "",
      description: "",
      year: "",
      stack: "",
      link: "",
      image: "",
      id: Date.now(),
    });
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen grid grid-cols-6 gap-x-4">
        {!loggedIn && (
          <form className="col-start-3 col-span-2 flex flex-col justify-center items-stretch gap-2">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setInputUsername(e.target.value)}
              className="input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setInputPassword(e.target.value)}
              className="input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
            />
            <button
              onClick={handleLogin}
              className="btn rounded-none w-1/5 font-super text-xl"
            >
              Log In
            </button>
          </form>
        )}

        {loggedIn && (
          <div className="w-screen min-h-screen px-4 pt-10">
            <form
              className="pt-20 grid grid-cols-6 gap-4"
              onSubmit={addProject}
            >
              <input
                type="text"
                name="title"
                placeholder="title"
                value={newProjectItem.title}
                onChange={handleInputChange}
                className="col-start-1 col-span-2 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />

              <input
                type="text"
                name="stack"
                placeholder="tech stack"
                value={newProjectItem.stack}
                onChange={handleInputChange}
                className="col-start-3 col-span-3 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />
              <button
                type="submit"
                className="btn rounded-none font-super text-xl"
              >
                Add project
              </button>

              <input
                type="text"
                name="link"
                placeholder="project link"
                value={newProjectItem.link}
                onChange={handleInputChange}
                className="col-start-1 col-span-2 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />
              <input
                type="text"
                name="image"
                placeholder="img"
                value={newProjectItem.image}
                onChange={handleInputChange}
                className="col-start-3 col-span-3 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />
              <input
                type="text"
                name="year"
                placeholder="year"
                value={newProjectItem.year}
                onChange={handleInputChange}
                className="col-start-6 col-span-1 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />

              <textarea
                type="text"
                name="description"
                placeholder="description"
                value={newProjectItem.description}
                onChange={handleInputChange}
                className="col-start-1 col-span-4 input placeholder border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              ></textarea>
              <input
                type="text"
                name="category"
                placeholder="category"
                value={newProjectItem.image}
                onChange={handleInputChange}
                className="col-start-5 col-span-2 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />
            </form>

            <div className="mt-4 flex flex-col items-start justify-center ">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full grid grid-cols-6 grid-rows-4 gap-4 bg-primary h-auto pt-4 px-4 pb-4 rounded-xl"
                >
                  <h2 className="col-start-1 row-start-1 font-super">
                    {project.title}
                  </h2>
                  <p className="col-start-1 row-start-2 row-span-2 col-span-5 font-super text-3xl leading-7">
                    {project.description}
                  </p>
                  <p className="font-super  col-start-3 col-span-2 px-4">
                    {project.stack}
                  </p>
                  <p className="font-super col-start-6 col-span-1 row-start-1 row-span-1 text-right">
                    {project.year}
                  </p>
                  <div className="col-start-1 col-span-1 row-start-4 row-span-1 flex items-center">
                    <a href={project.link}>
                      <button className="btn rounded-full">See website</button>
                    </a>
                  </div>

                  <img
                    src={project.image}
                    width="1920"
                    height="1080"
                    className="col-start-1 col-span-2 row-start-5 row-span-2 rounded-sm"
                    alt="blablabla"
                  />
                  <img
                    src={project.image}
                    width="1920"
                    height="1080"
                    className="col-start-3 col-span-2 row-start-5 row-span-2 rounded-sm"
                    alt="blablabla"
                  />
                  <img
                    src={project.image}
                    width="1920"
                    height="1080"
                    className="col-start-5 col-span-2 row-start-5 row-span-2 rounded-sm"
                    alt="blablabla"
                  />
                </div>
              ))}
            </div>
            <div className="w-full flex items-end justify-end pt-8">
              <button
                onClick={() => setLoggedIn(false)}
                className="btn rounded-xl"
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
