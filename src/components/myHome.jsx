import { Link } from "react-router-dom";
import pic1 from "../assets/Images/pic1.jpg";
import pic2 from "../assets/Images/pic2.jpg";
import pic3 from "../assets/Images/pic3.jpg";
import pic4 from "../assets/Images/pic4.jpg";
import pic5 from "../assets/Images/pic5.jpg";
import myHomeBg from "../assets/Images/Home-bg.jpg";
import myHomeBg2 from "../assets/Images/Home-bg2.jpg";

function MyHome() {
  return (
    <div className ="bg-no-repeat bg-cover bg-center h-screen" style={{backgroundImage: `url(${myHomeBg2})`}}>
      <div className="mt- h-[70vh] grid grid-cols-2 gap-4 p-12">
        {/* Left Section */}
        <div className=" text-black font-medium flex flex-col justify-center p-3 ">
          <h1 className="text-3xl text-cyan-800 font-roboto-mono font-extrabold">
            Hello, I'm Francis
          </h1>
          <p className="text-white font-extrabold text-md mt-2 font-roboto-mono">
            I'm a passionate web developer specializing in React, Tailwind CSS,
            and JavaScript.
          </p>
          {/* <button className="bg-lime-600  w-full h-12 rounded-md shadow-lime-800 shadow-md text-white mt-5  md:w-2/4">
            Let's get started
          </button> */}

          <div class="flex items-center  mt-7">
            <div class="relative group">
               <Link to="/projects">
               <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div class="relative z-10 flex items-center space-x-2">
                    <span class="transition-all duration-500 group-hover:translate-x-1">
                      Explore
                    </span>
                    <svg
                      class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      data-slot="icon"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
               </Link>
              
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex justify-center items-center">
          <div className="sm:w-50 sm:h-50 w-35 h-35 md:w-70 md:h-70 rounded-full border-12">
            <img
              className="w-full h-full rounded-full object-cover gradient-border-mask"
              src={pic2}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHome;
