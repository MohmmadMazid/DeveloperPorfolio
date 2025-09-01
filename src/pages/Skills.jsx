import React from "react";
import javascript from "../assets/jS.png";
import EXPRESSJS from "../assets/EXPRESSJS.png";
import HTML5 from "../assets/HTML5.png";
import CSS3 from "../assets/CSS3.png";
import Nodejs from "../assets/NODEJ.png";
import Reactjs from "../assets/reactJs.png";
import clanguage from "../assets/c-1.svg";
import cplusplus from "../assets/c.svg";
import tailwindcss from "../assets/tailwind-css-2.svg";
import reduxToolkit from "../assets/redux.svg";

const Skills = () => {
  return (
    <div id="skills" className="bg-gray-50 py-20">
      <div className="text-center mb-10 px-6">
        <h1 className="text-3xl md:text-4xl font-semibold">Tech Stack</h1>
        <div className="h-[2px] bg-gray-500 w-24 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 lg:px-20 text-center">
        <div>
          <img src={HTML5} alt="HTML5" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">HTML</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Expertise in crafting semantic, accessible, and SEO-friendly HTML
            structures that form the solid foundation for modern web
            applications.
          </p>
        </div>

        <div>
          <img src={CSS3} alt="CSS3" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">CSS</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Skilled in creating responsive, visually appealing designs with CSS,
            focusing on layouts, animations, and smooth user experiences.
          </p>
        </div>

        <div>
          <img src={javascript} alt="JavaScript" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">JavaScript</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Proficient in building dynamic, interactive web apps using
            JavaScript, handling DOM manipulation, logic, and seamless
            interactions.
          </p>
        </div>

        <div>
          <img src={Reactjs} alt="React" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">React</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Experienced in building modern, component-based apps with React.js,
            focusing on reusable UI, state management, and performance.
          </p>
        </div>

        <div>
          <img src={Nodejs} alt="Node.js" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">Node.js</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Skilled in backend development using Node.js, leveraging
            asynchronous programming for scalable, high-performance APIs.
          </p>
        </div>

        <div>
          <img src={EXPRESSJS} alt="Express.js" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">Express.js</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Strong in building robust server-side applications with Express.js,
            RESTful APIs, middleware, and efficient backend logic.
          </p>
        </div>
        <div>
          <img src={reduxToolkit} alt="Express.js" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">Redux-Toolkit</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Experienced in managing global application state with Redux Toolkit,
            leveraging slices, reducers, and RTK Query for efficient and
            scalable data handling.
          </p>
        </div>
        <div>
          <img src={tailwindcss} alt="Express.js" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">Tailwindcss</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Experienced in creating responsive, modern, and utility-first UIs
            using Tailwind CSS, ensuring clean design and fast development.
          </p>
        </div>
        <div>
          <img src={cplusplus} alt="Express.js" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">C++</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Skilled in developing efficient and modular programs using C++, with
            strong knowledge of OOP, STL, memory management, and problem-solving
            algorithms.
          </p>
        </div>
        <div>
          <img src={clanguage} alt="Express.js" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">C</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Proficient in C programming for building low-level, high-performance
            applications, with expertise in pointers, data structures, and
            system-level programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
