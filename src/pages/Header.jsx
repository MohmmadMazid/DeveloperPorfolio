import React from "react";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="flex flex-row flex-wrap ">
      <div>
        <h1 className="text-4xl font-bold">
          Web<span className="text-blue-600">Dev</span>
        </h1>
      </div>
      <div>
        <ul className="flex flex-row  ml-4 mt-2 pl-5 text-lg font-extralight  justify-around list-none">
          <li className="ml-3">
            <Link
              to="home"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="ml-3">
            <Link
              to="skills"
              className="cursor-pointer"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="ml-3">
            <Link
              to="about"
              className="cursor-pointer"
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className="ml-3">
            <Link
              to="projects"
              className="cursor-pointer"
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li className="ml-3">
            <Link
              to="contact"
              className="cursor-pointer"
              smooth={true}
              duration={1500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
