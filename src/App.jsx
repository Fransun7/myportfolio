import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/myHome";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-black h-screen mt-0">
        <nav className="p-3 gap-4">
          <div className=" flex justify-center h-[8vh]">
            <div className="w-4/5 text-center flex justify-center rounded-b-sm text-black border-4  border-t-0 inset-0 rounded-xl border-cyan-600">
              <ul className="flex space-x-4 items-center sm:space-x-10 md:space-x-20 font-bold text-white font-roboto">
                <li className="hover:text-cyan-500">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-cyan-500">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-cyan-500">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="hover:text-cyan-500">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
