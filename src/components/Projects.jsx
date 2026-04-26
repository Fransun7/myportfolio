import { useState } from "react";
import Project1 from "../assets/Images/Project1.png";
import Projecct2 from "../assets/Images/quiz app.png";
import Project3 from "../assets/Images/Project2.png";
import Project4 from "../assets/Images/Project3.png";
import Projecct5 from "../assets/Images/project5.png";
import bg1 from "../assets/Images/bg1.jpg";
import Project6 from "../assets/Images/agro-connect.png";

const projects = [
  {
    title: "Movie Library Web App",
    image: Project1,
    link: "https://quiz-app-wlnd.vercel.app/",
    description:
      "A movie website that lets users explore and discover films, with redirects to downloadable movie sources. Built with vanilla JavaScript, HTML, and CSS.",
  },
  {
    title: "Quiz Web App",
    image: Projecct2,
    link: "https://quiz-app-zeta-sooty.vercel.app/",
    description:
      "A free, open-source practice tool built for Nigerian students preparing for JAMB. Covers Biology, Chemistry, and Physics with score tracking and a wrong-answer review feature. Built with vanilla JavaScript.",
  },
  {
    title: "Task Manager Web App",
    image: Project3,
    link: null,
    description:
      "An essential productivity tool designed for managing personal and team task flow efficiently. Built with vanilla JavaScript, HTML, and CSS.",
  },
  {
    title: "Book Management System Web App",
    image: Project4,
    link: null,
    description:
      "A system developed for seamless book and library management, allowing users to track, add, and organize books in a structured interface.",
  },
  {
    title: "Weather Web App",
    image: Projecct5,
    link: "https://weather-app-omega-jade-89.vercel.app/",
    description:
      "An easy-to-use weather application that fetches and displays real-time weather data based on the user's location or a searched city.",
  },
  {
    title: "AgroConnect Web App",
    image: Project6,
    link: "https://agro-connect-react.vercel.app/",
    description:
      "A digital marketplace for agricuture products where consumers, vendors, buyers meet farmers for sale of produce without stress. This web app is built with React.Js and TailwindCSS",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  // function for opening description
  const openDescription = (e, index) => {
    e.preventDefault();
    setActiveIndex(index);
  };

  // function for closing description
  const closeDescription = (e, index) => {
    setActiveIndex(null);
  };
  return (
    <div className="">
      <div className="bg-white bg-no-repeat bg-cover bg-center justify-center mt-7 rounded-2xl rounded-b-none items-center pl-2 pr-2 h-screen">
        <p className="justify-self-center font-story-script text-3xl font-bold text-cyan-500">
          Projects
        </p>

        {/* grid container */}
        <div className="grid grid-cols-1 gap-4 font-mono p-5 justify-center items-center sm:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-50% h-70 bg-neutral-800 rounded-2xl p-2 flex flex-col hover:bg-gray-900 hover:shadow-xl hover:shadow-sky-400 transition-shadow overflow-hidden"
            >
              {/* image container */}
              <div className="w-full h-36 border-2 border-black rounded-xl overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Title */}
              <div className="mt-1">
                <h1 className="font-bold font-story-script text-cyan-600 text-lg">
                  {project.title}
                </h1>
              </div>

              {/* Description link + View button */}
              <div className="mt-1 flex flex-col">
                <a
                  href=""
                  className="underline text-neutral-300 hover:text-cyan-400 transition-colors w-fit"
                  onClick={(e) => openDescription(e, index)}
                >
                  Description
                </a>

                {project.link && (
                  <button className="bg-blue-900 border-3 p-2 mt-4 rounded-lg border-cyan-400">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-500 hover:text-cyan-400"
                    >
                      View Project
                    </a>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={closeDescription}
        >
          <div
            className="bg-neutral-800 border border-cyan-700 rounded-2xl p-6 max-w-sm w-full text-neutral-300 font-mono shadow-xl shadow-cyan-900"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-cyan-500 font-story-script text-xl font-bold mb-3">
              {projects[activeIndex].title}
            </h2>
            <p className="text-sm leading-relaxed text-neutral-300">
              {projects[activeIndex].description}
            </p>
            <button
              onClick={closeDescription}
              className="mt-5 bg-blue-900 border border-cyan-400 text-cyan-400 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
