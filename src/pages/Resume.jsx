import React from "react";
import { FaDownload, FaLink } from "react-icons/fa";
import resumeFile from "../assets/resume1.pdf";
import resumeImage from "../assets/resumesvg.png";

const Resume = () => {
  return (
    <div
      id="resume"
      className="bg-slate-300 min-h-[70vh] flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20"
    >
      <div className="flex justify-center">
        <img
          src={resumeImage}
          alt="Resume Preview"
          className="max-h-[420px] max-w-[420px] drop-shadow-lg md:m-3  sm:p-3 rounded-2xl"
        />
      </div>

      <div id="resume" className="text-center lg:text-left max-w-xl">
        <h2 className="text-4xl font-bold mb-6 text-slate-900">My Resume</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Explore my journey as a MERN Stack Developer. Download my CV to see
          more about my education, skills, and work experience that make me a
          strong candidate for full-stack roles.
        </p>
        <a
          href={resumeFile}
          download="Mohmmad-Mazid-Resume.pdf"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
        >
          <FaDownload className="text-lg " />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
