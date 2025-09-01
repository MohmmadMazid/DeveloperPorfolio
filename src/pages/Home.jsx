import React from "react";
import Header from "./Header";
import myImage from "../assets/hero-1.svg";
const Home = () => {
  return (
    <div id="home" className="bg-sky-100 ">
      <div className="p-5 ml-10">
        <Header />
      </div>

      <div className="flex flex-row flex-wrap ml-20 mt-20">
        <div className="self-center">
          <h1 className="text-6xl font-bold tracking-widest">
            I`m Mohmmad <br></br> Mazid
          </h1>
          <p className="text-3xl mt-4 text-slate-600 tracking-widest">
            Front-End Developer
          </p>
          <p className="text-xl font-extralight text-gray-700 mt-1">
            turning ideas into interactive reality
          </p>
        </div>
        <div className="ml-40 mt-10">
          <img className="h-100" src={myImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
