import React from "react";
import about from "../assets/AboutSvg.svg";
const About = () => {
  return (
    <div id="about" className="mt-30">
      <div className="flex flex-row flex-wrap justify-around">
        <div className="content-center">
          <img src={about} className="h-70  ml-20 mt-10  " />
        </div>
        <div className="max-w-150 ">
          <h1 className="text-3xl font-semibold tracking-widest mt-5 mb-5">
            About
          </h1>
          <div className="h-[1px] bg-slate-400 mb-5"></div>
          <h2 className=" text-slate-500">
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
            Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
            Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
            drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
            candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
            muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé
            chocolate cake pastry brownie. Oat cake halvah sweet roll cotton
            candy croissant lollipop. Macaroon tiramisu chocolate bar candy
            candy carrot cake jelly sweet. Gummies croissant macaroon dessert.
            Chocolate cake dragée pie.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
