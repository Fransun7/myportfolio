import ProjectBg from "../assets/Images/Project-bg.jpg";
import Project1 from "../assets/Images/Project1.png";
import Project2 from "../assets/Images/Project2.png";
import Project3 from "../assets/Images/Project3.png";
import Project4 from "../assets/Images/Project4.png";

function Projects() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center justify-center text-white mt-7 rounded-2xl rounded-b-none items-center pl-2 pr-2"
        style={{ backgroundImage: `url(${ProjectBg})` }}
      >
        <p className="justify-self-center font-story-script text-2xl">
          - Projects -
        </p>
        {/* Project section */}
        <div className="grid grid-cols-2 gap-4 font-mono p-5 justify-center items-center sm:grid-cols-3">
          {/* card container 1 */}
          <div className="w-50% h-70  bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col  hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow overflow-hidden">
            {/* image container */}
            <div className="w-full border-2 border-black rounded-xl overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={Project1}
                alt=""
              />
            </div>
            {/* Title Box */}
            <div className="mt-1">
              <h1 className="font-bold font-story-script text-cyan-600 text-lg">
                Movie Libary Web App
              </h1>
            </div>
            {/* Description Box */}
            <div className="mt-1">
              <p>
                A movie website that redirects to movie downloadable source.
              </p>
            </div>
          </div>
          {/* Card container 2 */}
          <div className="w-50% h-70  bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col  hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow overflow-hidden items-start">
            {/* image container */}
            <div className="w-full border-2 border-black rounded-xl overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={Project2}
                alt=""
              />
            </div>
            {/* Title Box */}
            <div className="mt-1">
              <h1 className="font-bold font-story-script text-cyan-600 text-lg">
                Task Manager Web App
              </h1>
            </div>
            {/* Description Box */}
            <div className="mt-1">
              <p>An essential tool suitable for managing task flow.</p>
            </div>
          </div>

           {/* Card container 2 */}
          <div className="w-50% h-70  bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col  hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow overflow-hidden items-start">
            {/* image container */}
            <div className="w-full border-2 border-black rounded-xl overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={Project2}
                alt=""
              />
            </div>
            {/* Title Box */}
            <div className="mt-1">
              <h1 className="font-bold font-story-script text-cyan-600 text-lg">
                Task Manager Web App
              </h1>
            </div>
            {/* Description Box */}
            <div className="mt-1">
              <p>An essential tool suitable for managing task flow.</p>
            </div>
          </div>

           {/* Card container 2 */}
          <div className="w-50% h-70  bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col  hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow overflow-hidden items-start">
            {/* image container */}
            <div className="w-full border-2 border-black rounded-xl overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={Project2}
                alt=""
              />
            </div>
            {/* Title Box */}
            <div className="mt-1">
              <h1 className="font-bold font-story-script text-cyan-600 text-lg">
                Task Manager Web App
              </h1>
            </div>
            {/* Description Box */}
            <div className="mt-1">
              <p>An essential tool suitable for managing task flow.</p>
            </div>
          </div>

           {/* Card container 2 */}
          <div className="w-50% h-70  bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col  hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow overflow-hidden items-start">
            {/* image container */}
            <div className="w-full border-2 border-black rounded-xl overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={Project2}
                alt=""
              />
            </div>
            {/* Title Box */}
            <div className="mt-1">
              <h1 className="font-bold font-story-script text-cyan-600 text-lg">
                Task Manager Web App
              </h1>
            </div>
            {/* Description Box */}
            <div className="mt-1">
              <p>An essential tool suitable for managing task flow.</p>
            </div>
          </div>

           {/* Card container 2 */}
          <div className="w-50% h-70  bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col  hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow overflow-hidden items-start">
            {/* image container */}
            <div className="w-full border-2 border-black rounded-xl overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={Project3}
                alt=""
              />
            </div>
            {/* Title Box */}
            <div className="mt-1">
              <h1 className="font-bold font-story-script text-cyan-600 text-lg">
                Book Management System Web App
              </h1>
            </div>
            {/* Description Box */}
            <div className="mt-1">
              <p>A System developed for the book and libary management.</p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="bg-black">
        <form class=" text-neutral-800 py-2 relative overflow-hidden flex flex-col justify-around w-screen border border-neutral-500 rounded-lg  p-3 px-6">
          <div class="before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
            <span class="font-extrabold text-violet-600 text-sm">
              Get more updates...
            </span>
            <p class="text-neutral-700 text-sm">
              Sign up for our newsletter and you'll be the first to find out
              about new features
            </p>
          </div>
          <div class="flex gap-1">
            <div class="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
              <input
                type="text"
                class="relative bg-transparent ring-0 outline-none border border-neutral-500 text-white placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2 checked:bg-emerald-500"
                placeholder="Mail..."
              />
            </div>
            <button class="bg-violet-500 text-neutral-50 p-2 rounded-lg hover:bg-violet-400">
              Subscribe
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
}

export default Projects;
