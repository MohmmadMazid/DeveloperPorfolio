import React from "react";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
const Projects = () => {
  return (
    <div id="projects" className="bg-sky-50 mt-20 mb-20 ">
      <div className="mt-10 p-20">
        <h1 className="text-3xl font-semibold p-2 ">Web Creations</h1>
        <div className="h-[1px] bg-gray-500 "></div>
      </div>
      <div className="flex flex-row flex-wrap justify-around mt-20 p-3">
        <div className="border-none rounded-2xl shadow-2xl hover:shadow-gray-500 w-100 h-120">
          <img
            src={project1}
            className="h-60 w-100 rounded-tl-2xl rounded-tr-2xl"
          />
          <div className="p-5">
            <h2 className="text-2xl">Project1</h2>
            <p className="mt-5 text-slate-600 tracking-widest leading-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores aperiam porro impedit tenetur quo hic omnis doloribus
              dolores enim deleniti.
            </p>
          </div>
        </div>
        <div className="border-none rounded-2xl shadow-2xl hover:shadow-gray-500 w-100">
          <img
            src={project2}
            className="h-60 w-100 rounded-tl-2xl rounded-tr-2xl"
          />
          <div className="p-5">
            <h2 className="text-2xl">Project2</h2>
            <p className="mt-5 text-slate-600 tracking-widest leading-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores aperiam porro impedit tenetur quo hic omnis doloribus
              dolores enim deleniti.
            </p>
          </div>
        </div>
        <div className="border-none rounded-2xl shadow-2xl hover:shadow-gray-500 w-100">
          <img
            src={project3}
            className="h-60 w-100 rounded-tl-2xl rounded-tr-2xl"
          />
          <div className="p-5 ">
            <h2 className="text-2xl">Project3</h2>
            <p className="mt-5 text-slate-600 tracking-widest leading-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores aperiam porro impedit tenetur quo hic omnis doloribus
              dolores enim deleniti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
