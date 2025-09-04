import AboutBg from "../assets/Images/About-bg.jpg";
import pic6 from "../assets/Images/pic6.jpg";
import pic1 from "../assets/Images/pic1.jpg";

function About() {
  return (
    <div className="text-white mt-7">
      <p className="justify-self-center font-story-script text-2xl">About me</p>
      <div
        className="bg-no-repeat bg-cover bg-center mt-6 grid grid-rows-3 rounded-2xl rounded-b-none"
        style={{ backgroundImage: `url(${AboutBg})` }}
      >
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
            "My journey into web development began with a simple curosity: 'How
            does this work?' That question led me down a rabbit hole of code,
            and i discovered the immense satisfaction of building something from
            nothing. I've since dedicated myself to mastering the art of
            front-end development."
          </p>

          <p className="mt-5">
            "As a <span class="text-amber-950">front-end developer</span>, I am a problem-solver and a
            creator. I love using <span class="text-amber-950">HTML,CSS</span>, and
            <span class="text-amber-950">TailwindCSS</span> to bring static designs to life, and i
            leverage <span class="text-amber-950">React</span> and <span class="text-amber-950">JavaScript</span> to build
            dynamic, interactive interfaces that feel fast intuitive. Every line
            of code i write is a step toward user experience. I am always
            excited to learn, grow, and build something new."
          </p>
        </div>
      </div>
      <div className="bg-black border-3 border-b-0 border-l-0 border-r-0 border-neutral-800"></div>
    </div>
  );
}

export default About;
