import ProjectBg from "../assets/Images/Project-bg.jpg";

function Projects() {
  return (
    <div className="text-white mt-7 w-screen">
      <p className="justify-self-center font-story-script text-2xl">
        - Projects -
      </p>
      {/* Project section */}
      <div
        className="bg-no-repeat bg-cover bg-center mt-6 w-screen grid grid-cols-2 gap-10 p-3 sm:grid-cols-3 md:grid-cols-4"
        style={{ backgroundImage: `url(${ProjectBg})` }}
      >
        <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
          <div class="">
            <p class="font-extrabold">Card title</p>
            <p class="">4 popular types of cards in UI design.</p>
          </div>
          <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
            See more
          </button>
        </div>

        <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
          <div class="">
            <p class="font-extrabold">Card title</p>
            <p class="">4 popular types of cards in UI design.</p>
          </div>
          <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
            See more
          </button>
        </div>

        <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
          <div class="">
            <p class="font-extrabold">Card title</p>
            <p class="">4 popular types of cards in UI design.</p>
          </div>
          <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
            See more
          </button>
        </div>

        <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
          <div class="">
            <p class="font-extrabold">Card title</p>
            <p class="">4 popular types of cards in UI design.</p>
          </div>
          <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
            See more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
