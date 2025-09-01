import React from "react";
// import bootstrap from "../assets/bOOTSTRAP.png";
import javascript from "../assets/jS.png";
import EXPRESSJS from "../assets/EXPRESSJS.png";
import HTML5 from "../assets/HTML5.png";
import CSS3 from "../assets/CSS3.png";
import Nodejs from "../assets/NODEJ.png";
import Reactjs from "../assets/reactJs.png";
const Skills = () => {
  return (
    <div id="skills" className="flex flex-col bg-gray-50 p-5">
      <div className="m-10 text-3xl font-semibold">
        <h1 className="ml-7">Tech Stack</h1>
      </div>
      <div className="h-[1px] bg-slate-400 mb-5"></div>

      <div className="flex flex-row flex-wrap  m-3 justify-center">
        <div className=" max-w-100 m-2 p-2">
          <img src={HTML5} className="h-35 " />
          <h1 className="text-lg font-semibold mt-5">HTML</h1>
          <p className="font-extralight text-slate-500 mt-3">
            Expertise in crafting well-structured and semantic HTML to build
            accessible and SEO-friendly web pages, ensuring a solid foundation
            for web applications.
          </p>
        </div>
        <div className=" max-w-100 m-2 p-2">
          <img src={CSS3} className="h-35 " />
          <h1 className="text-lg font-semibold mt-5">CSS</h1>
          <p className="font-extralight text-slate-500 mt-3">
            Proficient in designing responsive and visually appealing user
            interfaces with CSS, focusing on layouts, animations, and enhancing
            user experience across devices.
          </p>
        </div>
        <div className=" max-w-100 m-2 p-2">
          <img src={javascript} className="h-35 " />
          <h1 className="text-lg font-semibold mt-5">javascript</h1>
          <p className="font-extralight text-slate-500 mt-3">
            Expertise in building interactive and dynamic web applications with
            JavaScript, emphasizing seamless user interactions, DOM
            manipulation, and application logic.
          </p>
        </div>
        <div className=" max-w-100 m-2 p-2">
          <img src={Reactjs} className="h-35 " />
          <h1 className="text-lg font-semibold mt-5">React</h1>
          <p className="font-extralight text-slate-500 mt-3">
            Proficient in building modern, component-based front-end
            applications with React.js, focusing on reusable UI, state
            management, and smooth user experiences
          </p>
        </div>
        <div className=" max-w-100 m-2 p-2">
          <img src={Nodejs} className="h-35 " />
          <h1 className="text-lg font-semibold mt-5">Nodejs</h1>
          <p className="font-extralight text-slate-500 mt-3">
            Skilled in developing scalable backend applications using Node.js,
            leveraging asynchronous programming for efficient performance and
            API development.
          </p>
        </div>
        <div className=" max-w-100 m-2 p-2">
          <img src={EXPRESSJS} className="h-35 " />
          <h1 className="text-lg font-semibold mt-5">Expressjs</h1>
          <p className="font-extralight text-slate-500 mt-3">
            Experienced in creating robust server-side applications with
            Express.js, building RESTful APIs, middleware integration, and
            streamlined backend logic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
