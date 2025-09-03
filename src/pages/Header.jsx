import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // for hamburger & close icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 ">
          Web<span className="text-blue-600">Dev</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex ">
          <ul className="flex flex-row space-x-6 text-lg font-light">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={1500}
                className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={1500}
                className="cursor-pointer hover:text-blue-600 hover:underline hover:underline-offset-4"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-light">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                className="cursor-pointer hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                className="cursor-pointer hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={1500}
                className="cursor-pointer hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={1500}
                className="cursor-pointer hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
