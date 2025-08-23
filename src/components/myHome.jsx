import pic1 from "../assets/Images/pic1.jpg";

function myHome() {
  return (
    <div>
      <div className="bg-black flex justify-center h-[8vh]">
        <div className="bg-neutral-800 w-4/5 text-center flex justify-center rounded-b-sm text-white ">
          <ul className="flex space-x-2 items-center">
            <li>Home</li>
            <li>Project</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 h-[70vh] grid grid-cols-2 gap-4 p-12">
        <div className=" text-white flex flex-col justify-center p-3 ">
          <h1 className="text-3xl font-extrabold">Hello, I'm Francis</h1>
          <p className="text-md mt-2">
            I'm a passionate web developer specializing in React, Tailwind CSS,
            and JavaScript.
          </p>
          <button className="bg-lime-600 h-12 rounded-md shadow-lime-800 shadow-md text-white mt-5">
            Let's get started
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-70 h-70">
            <img
              className="w-full h-full rounded-full object-cover"
              src={pic1}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default myHome;
