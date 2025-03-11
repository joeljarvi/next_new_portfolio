"use client";
import { useContext, useState } from "react";
import Header from "../components/Header";
import { MyPortfolioContext } from "../context/PortfolioContext";

export default function Admin() {
  const { projects, setProjects } = useContext(MyPortfolioContext);
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
    category: "", // Fixed to 'category'
    id: Date.now(), // Unique ID for each project
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

  // Add project and update both context and localStorage
  function addProject(event) {
    event.preventDefault();

    // Create a new project object with the correct structure
    const updatedProjects = [
      ...projects,
      { ...newProjectItem, id: Date.now() },
    ];
    setProjects(updatedProjects); // Update context state with new project

    // Reset form after submitting
    setNewProjectItem({
      title: "",
      description: "",
      year: "",
      stack: "",
      link: "",
      image: "",
      category: "",
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
              className="pt-16 grid grid-cols-6 gap-4"
              onSubmit={addProject}
            >
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newProjectItem.title}
                onChange={handleInputChange}
                className="col-start-1 col-span-2 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newProjectItem.category} // Fixed from 'categories'
                onChange={handleInputChange}
                className="col-start-3 col-span-3 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />
              <button
                type="submit"
                className="col-start-6 btn rounded-none font-super text-xl"
              >
                Add Project
              </button>

              <input
                type="text"
                name="link"
                placeholder="Project Link"
                value={newProjectItem.link}
                onChange={handleInputChange}
                className="col-start-1 col-span-2 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />
              <input
                type="text"
                name="stack"
                placeholder="Tech Stack"
                value={newProjectItem.stack}
                onChange={handleInputChange}
                className="col-start-3 col-span-3 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={newProjectItem.year}
                onChange={handleInputChange}
                className="col-start-6 col-span-1 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newProjectItem.image}
                onChange={handleInputChange}
                className="col-start-1 col-span-2 input border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />

              <textarea
                name="description"
                placeholder="Description"
                value={newProjectItem.description}
                onChange={handleInputChange}
                className="col-start-3 col-span-4 input placeholder border-b-2 border-b-black border-l-0 border-t-0 border-r-0 rounded-none font-super"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
