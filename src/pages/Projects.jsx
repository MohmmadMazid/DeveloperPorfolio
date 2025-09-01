import React from "react";
import wanderlust from "../assets/wanderlust.png";
import chatApp from "../assets/chatApp.avif";
import porfolio from "../assets/portfolio.png";
import clothing from "../assets/clothing.png";
import blogify from "../assets/blogify.png";
import { FaLink, FaGithub } from "react-icons/fa6";

const Projects = () => {
  return (
    <div id="projects" className="bg-sky-50 py-20">
      <div className="text-center mb-10 px-6">
        <h1 className="text-3xl md:text-4xl font-semibold">Web Creations</h1>
        <div className="h-[2px] bg-gray-500 w-24 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20">
        <div className="bg-gray-50 rounded-2xl shadow-2xl hover:shadow-gray-500 transition duration-300 min-h-[450px] flex flex-col">
          <img
            src={wanderlust}
            className="h-60 w-full object-contain rounded-t-2xl border-b-2 border-b-slate-600"
            alt="Project 1"
          />
          <div className="p-5 flex-1">
            <h2 className="text-2xl font-semibold">Wanderlust</h2>
            <p className="mt-5 text-slate-600 tracking-wide leading-7">
              Wanderlust is an Airbnb-inspired web application where users can
              explore destinations, book accommodations, and manage their stays.
              It features authentication, property listings, booking management,
              and a user-friendly interface. Built using Node.js, Express.js,
              MongoDB, and EJS, the platform replicates a real-world travel
              booking experience
            </p>
            <a
              className="text-blue-700 m-2 cursor-pointer inline-block"
              href="https://wanderlust-3mt3.onrender.com/listing"
              target="_blank"
            >
              <FaLink />
            </a>
            <a
              className="text-balck m-2 cursor-pointer inline-block "
              href="https://github.com/MohmmadMazid/wanderlust"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-2xl hover:shadow-gray-500 transition duration-300 min-h-[450px] flex flex-col">
          <img
            src={blogify}
            className="h-60 w-full object-contain rounded-t-2xl border-b-2 border-b-slate-600"
            alt="Project 2"
          />
          <div className="p-5 flex-1">
            <h2 className="text-2xl font-semibold">Blogify </h2>
            <p className="mt-5 text-slate-600 tracking-wide leading-7">
              Blogify is a blogging platform that allows users to create, edit,
              and delete posts with secure authentication. It also supports
              viewing famous landmarks with detailed blogs, providing an
              engaging content-sharing experience. The project was developed
              using Node.js, Express.js, MongoDB, and Passport.js with a
              responsive front-end design.
            </p>
            <a
              className="text-blue-700 m-2 cursor-pointer inline-block"
              href="https://blogify-project-l1hg.onrender.com/user/home"
              target="_blank"
            >
              <FaLink />
            </a>
            <a
              className="text-balck m-2 cursor-pointer inline-block "
              href="https://github.com/MohmmadMazid/Blogify-website"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-2xl hover:shadow-gray-500 transition duration-300 min-h-[450px] flex flex-col">
          <img
            src={porfolio}
            className="h-60 w-full object-contain rounded-t-2xl border-b-2 border-b-slate-600"
            alt="Project 3"
          />
          <div className="p-5 flex-1">
            <h2 className="text-2xl font-semibold">Portfolio</h2>
            <p className="mt-5 text-slate-600 tracking-wide leading-7">
              My portfolio website is a fully responsive platform designed to
              highlight my skills, experience, and projects. It showcases clean
              UI/UX with smooth navigation and includes sections for about,
              skills, projects, and contact information. This project was built
              using React.js and Tailwind CSS, ensuring responsiveness across
              devices.
            </p>
            <a className="text-blue-700 m-2 cursor-pointer inline-block">
              <FaLink />
            </a>
            <a
              className="text-balck m-2 cursor-pointer inline-block "
              href="https://github.com/MohmmadMazid/DeveloperPorfolio"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl shadow-2xl hover:shadow-gray-500 transition duration-300 min-h-[450px] flex flex-col">
          <img
            src={clothing}
            className="h-60 w-full object-cover rounded-t-2xl border-b-2 border-b-slate-600"
            alt="Project 3"
          />
          <div className="p-5 flex-1">
            <h2 className="text-2xl font-semibold">
              E-Commerce &#91; Clothing-Website &#93;
            </h2>
            <p className="mt-5 text-slate-600 tracking-wide leading-7">
              The E-Commerce Website is a full-stack application with product
              listings, search functionality, shopping cart, and checkout flow.
              It simulates an online store experience, integrating
              authentication and secure cart management. Developed using the
              MERN stack, it focuses on scalability, responsiveness, and smooth
              user interaction.
            </p>
            <a className="text-blue-700 m-2 cursor-pointer inline-block">
              <FaLink />
            </a>
            <a className="text-balck m-2 cursor-pointer inline-block ">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl shadow-2xl hover:shadow-gray-500 transition duration-300 min-h-[450px] flex flex-col">
          <img
            src={chatApp}
            className="h-60 w-full object-cover rounded-t-2xl border-b-2 border-b-slate-600"
            alt="Project 3"
          />
          <div className="p-5 flex-1">
            <h2 className="text-2xl font-semibold">Chat Application</h2>
            <p className="mt-5 text-slate-600 tracking-wide leading-7">
              This real-time chat application was built using Express.js and
              Socket.IO, enabling instant one-to-one and group messaging. It
              provides a seamless chatting experience with real-time updates,
              socket events, and a responsive design, making communication
              efficient and user-friendly.
            </p>
            <a className="text-blue-700 m-2 cursor-pointer inline-block">
              <FaLink />
            </a>
            <a
              className="text-balck m-2 cursor-pointer inline-block "
              href="https://github.com/MohmmadMazid/Socketapp"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
