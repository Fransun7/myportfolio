import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/myHome";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <div className=" bg-black h-screen w-screen mt-0">
        <nav className="p-3 gap-4">
          <div className=" flex justify-center h-[8vh]">
            <div className="w-4/5 text-center flex justify-center rounded-b-sm text-black border-4  border-t-0 inset-0 rounded-xl border-cyan-600">
              <ul className="flex space-x-4 items-center sm:space-x-10 md:space-x-20 font-bold text-white font-roboto">
                <li>
                <NavLink to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-cyan-500"
                        : "text-white hover:text-cyan-500"
                    }>Home</NavLink>
                </li>
                 
                <li>
                  <NavLink to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-cyan-500"
                        : "text-white hover:text-cyan-500"
                    }>About</NavLink>
                  
                </li>

                <li>
               <NavLink to="/projects"
                    className={({ isActive }) =>
                      isActive
                        ? "text-cyan-500"
                        : "text-white hover:text-cyan-500"
                    }>Projects</NavLink>
                  
                </li>
                <li>
                  <NavLink to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-cyan-500"
                        : "text-white hover:text-cyan-500"
                    }>Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
