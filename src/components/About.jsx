import AboutBg from "../assets/Images/About-bg.jpg";
import pic6 from "../assets/Images/pic6.jpg";
import pic1 from "../assets/Images/pic1.jpg";

function About() {
  return (
    <div>
      // About me section
      <div
        className="text-white mt-7 w-screen bg-no-repeat bg-cover bg-center rounded-2xl rounded-b-none"
        style={{ backgroundImage: `url(${AboutBg})` }}
      >
        <p className="justify-self-center font-story-script text-2xl  ">
          - About me -
        </p>
        <div className=" mt-6 grid grid-rows-3 ">
          <div className="rounded-2xl  border-b-0 border-r-0 bg-no-repeat bg-cover bg-center justify-center flex flex-col items-center ">
            <div className="relative rounded-full w-50 h-50 overflow-hidden border-8 border-amber-950">
              <img
                className="absolute w-full h-full object-cover"
                src={pic1}
                alt=""
              />
            </div>
            <div className="mt-4">
              <button class="bg-amber-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Front-end Web Developer
              </button>
            </div>
          </div>

          <div className="p-4 text-black font-roboto-mono font-bold text-xl row-span-2 ">
            <p className="">
              "My journey into web development began with a simple curosity:
              'How does this work?' That question led me down a rabbit hole of
              code, and i discovered the immense satisfaction of building
              something from nothing. I've since dedicated myself to mastering
              the art of front-end development."
            </p>

            <p className="mt-5">
              "As a <span class="text-amber-950">front-end developer</span>, I
              am a problem-solver and a creator. I love using{" "}
              <span class="text-amber-950">HTML,CSS</span>, and
              <span class="text-amber-950">TailwindCSS</span> to bring static
              designs to life, and i leverage{" "}
              <span class="text-amber-950">React</span> and{" "}
              <span class="text-amber-950">JavaScript</span> to build dynamic,
              interactive interfaces that feel fast intuitive. Every line of
              code i write is a step toward user experience. I am always excited
              to learn, grow, and build something new."
            </p>
            <div className="mt-30 flex justify-center">
              <a
                href="/my cv.pdf"
                download="francis-omotayo-cv.pdf"
                className="bg-orange-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300"
              >
                Download My CV
              </a>
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
    </div>
  );
}

export default About;
