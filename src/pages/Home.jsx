import React from "react";
import Header from "./Header";
// import myImage1 from "../assets/hero-1.svg";
// import resumeImge from "../assets/resumesvg.png";
import homeImage from "../assets/homeImage.svg";

const Home = () => {
  return (
    <div id="home" className="bg-sky-100 min-h-screen w-full">
      <div className="p-5">
        <Header />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-28">
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
            I&apos;m Mohmmad <br className="hidden sm:block" /> Mazid
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 tracking-widest">
            MERN-Stack Developer
          </p>
          <p className="text-xl font-extralight text-gray-700 mt-2 tracking-widest">
            Turning ideas into interactive reality. <br />
            Designing solutions that connect creativity with technology.
          </p>
        </div>

        <div className="mb-10 lg:mb-0">
          <img
            className="w-60 sm:w-72 md:w-96 lg:w-[500px] xl:w-[500px] mx-auto rounded-"
            // src={myImage1}
            src={homeImage}

            // src="https://media.licdn.com/dms/image/v2/D5603AQFKlVLePPQzHQ/profile-displayphoto-scale_400_400/B56ZjMvqQxHUAg-/0/1755781704686?e=1759363200&v=beta&t=1gTiCLtfUhv1P4kTjYYC2WQMcOArIWMOF9Tc-h-cy6c"
            // alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
