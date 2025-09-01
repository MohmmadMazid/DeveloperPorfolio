import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* <div>
        <Home />
      </div> */}
      <ToastContainer position="top-center" autoClose={3000} />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route />
        </Routes>
      </div>
    </>
  );
}

export default App;
