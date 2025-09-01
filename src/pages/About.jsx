import React from "react";
import about from "../assets/AboutSvg.svg";

const About = () => {
  return (
    <div id="about" className="mt-10 sm:mt-20">
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-around">
        <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
          <img
            src={about}
            className="h-60 sm:h-72 lg:h-80 w-auto mt-6 lg:mt-10"
            alt="About Illustration"
          />
        </div>
        <div className="max-w-xl px-4 sm:px-8 mt-8 lg:mt-0 lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-widest mb-4">
            About Me
          </h1>
          <div className="h-[1px] bg-slate-400 mb-5"></div>
          <h2 className="text-sm sm:text-base text-slate-500 leading-relaxed">
            I’m a passionate{" "}
            <span className="font-semibold text-slate-700">
              Full Stack MERN Developer
            </span>
            with strong expertise in building dynamic, responsive, and scalable
            web applications. I have hands-on experience in developing projects
            using
            <span className="font-semibold text-slate-700">
              {" "}
              React.js, Node.js, Express.js, and MongoDB
            </span>
            , along with a solid foundation in JavaScript, HTML, CSS, and modern
            frameworks.
            <br />
            <br />
            I enjoy solving real-world problems through clean and efficient code
            while continuously learning new technologies to stay updated in the
            fast-moving tech industry. My goal is to contribute to innovative
            teams where I can apply my skills to create impactful digital
            solutions and grow as a developer.
            <br />
            <br />
            Beyond coding, I am a quick learner, detail-oriented, and have a
            strong interest in collaborative teamwork that drives both
            professional and personal growth.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
