import ProjectBg from "../assets/Images/Project-bg.jpg";
import Project1 from "../assets/Images/Project1.png";
import Project2 from "../assets/Images/Project2.png";
import Project3 from "../assets/Images/Project3.png";
import Project4 from "../assets/Images/Project4.png";

function Projects() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center justify-center text-white mt-7 w-screen h-screen rounded-2xl rounded-b-none"
        style={{ backgroundImage: `url(${ProjectBg})` }}
      >
        <p className="justify-self-center font-story-script text-2xl">
          - Projects -
        </p>
        {/* Project section */}
        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-9 w-screen overflow-auto p-2 justify-center font-mono">
          <div class="w-50 h-70 bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col items-start  justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
            <div class="w-46 h-33 bg-sky-300 rounded-2xl">
              <img src={Project1} alt="" />
            </div>
            <div class="">
              <p class="font-extrabold font-roboto-mono">Movie Website</p>
              <p class="">A website that redirects users to movie source.</p>
            </div>
            <button class="bg-sky-700 font-extrabold p-2 px-5 rounded-xl hover:bg-sky-500 transition-colors">
              See more
            </button>
          </div>

          <div class="w-50 h-70 bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col items-start  justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
            <div class="w-46 h-33 bg-sky-300 rounded-2xl">
              <img className=" rounded-lg" src={Project2} alt="" />
            </div>
            <div class="">
              <p class="font-extrabold font-roboto-mono">A Task Manager</p>
              <p class="">An essential tool for managing tasks.</p>
            </div>
            <button class="bg-sky-700 font-extrabold p-2 px-5 rounded-xl hover:bg-sky-500 transition-colors">
              See more
            </button>
          </div>

          <div class="w-50 h-70 bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col items-start  justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
            <div class="relative w-46 h-33  rounded-lg">
              <img className="absolute h-full rounded-lg" src={Project3} alt="" />
            </div>
            <div class="">
              <p class="font-extrabold font-roboto-mono">Wallet Landing Page</p>
              <p class="">A unique wallet landing page.</p>
            </div>
            <button class="bg-sky-700 font-extrabold p-2 px-5 rounded-xl hover:bg-sky-500 transition-colors">
              See more
            </button>
          </div>

          <div class="w-50 h-70 bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col items-start  justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
            <div class="relative w-46 h-33 bg-sky-300 rounded-lg">
              <img className="absolute object-cover h-full rounded-lg" src={Project4} alt="" />
            </div>
            <div class="">
              <p class="font-extrabold font-roboto-mono">Cloned Youtube Web </p>
              <p class="">A cloned youtube website.</p>
            </div>
            <button class="bg-sky-700 font-extrabold p-2 px-5 rounded-xl hover:bg-sky-500 transition-colors">
              See more
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="bg-black m-0">
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
