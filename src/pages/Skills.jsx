import React from "react";
import javascript from "../assets/javascript-1.svg";
import EXPRESSJS from "../assets/express-109.svg";
import HTML5 from "../assets/html-1.svg";
import CSS3 from "../assets/css-3.svg";
import Nodejs from "../assets/nodejs-1.svg";
import Reactjs from "../assets/react-2.svg";
import clanguage from "../assets/c-1.svg";
import cplusplus from "../assets/c.svg";
import tailwindcss from "../assets/tailwind-css-2.svg";
import reduxToolkit from "../assets/redux.svg";
import mongoDb from "../assets/mongodb-icon-2.svg";
import mySql from "../assets/mysql-logo-pure.svg";
import Nextjs from "../assets/nextjs.svg";

const Skills = () => {
  return (
    <div id="skills" className="mt-10 bg-gray-50 py-20">
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
          <img src={Nextjs} alt="React" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">React</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Experienced in building scalable, server-rendered applications with
            Next.js, leveraging features like API routes, dynamic routing, and
            static site generation for optimal performance.
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
          <img src={mongoDb} alt="Express.js" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">MongoDb</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Skilled in designing and managing NoSQL databases with MongoDB,
            handling collections, documents, and basic queries efficiently.
            Experienced in performing CRUD operations in MongoDB to store,
            retrieve, and update application data effectively.
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
          <img src={mySql} alt="Express.js" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">MYSQL</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Proficient in creating and managing relational databases using SQL,
            including tables, queries, and basic data manipulation. Skilled in
            writing SQL queries to insert, update, delete, and retrieve data for
            structured applications.
          </p>
        </div>
        <div>
          <img src={cplusplus} alt="Express.js" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">C++</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Good in writing clean and efficient programs in C++, with good
            knowledge of OOP concepts, standard libraries (STL), and basic
            problem-solving techniques. Familiar with data structures like
            arrays, stacks, queues, linked lists, and trees.
          </p>
        </div>
        <div>
          <img src={clanguage} alt="Express.js" className="h-20 mx-auto" />
          <h1 className="text-xl font-semibold mt-5">C</h1>
          <p className="font-light text-slate-600 mt-3 leading-7">
            Intermidiate in C programming for building simple and effective
            applications, with understanding of pointers, arrays, and basic data
            structures such as stacks, queues, linked lists, and trees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
