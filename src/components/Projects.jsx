import ProjectBg from "../assets/Images/Project-bg.jpg";

function Projects() {
  return (
    <div className="text-white mt-7 w-screen">
      <p className="justify-self-center font-story-script text-2xl">
        - Projects -
      </p>
      {/* Project section */}
      <div
        className="bg-no-repeat bg-cover bg-center mt-6  grid grid-cols-2 gap-20 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-9 w-screen overflow-auto p-2 justify-center"
        style={{ backgroundImage: `url(${ProjectBg})` }}
      >

<div class="w-50 h-70 bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col items-start  justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
  <div class="w-46 h-33 bg-sky-300 rounded-2xl"></div>
  <div class="">
      <p class="font-extrabold">Card title</p>
      <p class="">4 popular types of cards in UI design.</p>
  </div>
  <button class="bg-sky-700 font-extrabold p-2 px-5 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
</div>

<div class="w-50 h-70 bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col items-start  justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
  <div class="w-46 h-33 bg-sky-300 rounded-2xl"></div>
  <div class="">
      <p class="font-extrabold">Card title</p>
      <p class="">4 popular types of cards in UI design.</p>
  </div>
  <button class="bg-sky-700 font-extrabold p-2 px-5 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
</div>

<div class="w-50 h-70 bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col items-start  justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
  <div class="w-46 h-33 bg-sky-300 rounded-2xl"></div>
  <div class="">
      <p class="font-extrabold">Card title</p>
      <p class="">4 popular types of cards in UI design.</p>
  </div>
  <button class="bg-sky-700 font-extrabold p-2 px-5 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
</div>

<div class="w-50 h-70 bg-neutral-800 rounded-2xl text-neutral-300 p-2 flex flex-col items-start  justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
  <div class="w-46 h-33 bg-sky-300 rounded-2xl"></div>
  <div class="">
      <p class="font-extrabold">Card title</p>
      <p class="">4 popular types of cards in UI design.</p>
  </div>
  <button class="bg-sky-700 font-extrabold p-2 px-5 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
</div>





      </div>
    </div>
  );
}

export default Projects;
