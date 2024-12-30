import React from "react";
import HeroImage from "../assets/header-img.png";
import { ReactTyped } from "react-typed";
import background from "../assets/b4.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="container mx-auto">
        <div className="min-h-[600px] max-w-[90%] mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3">
            <div className="max-w-[700px]">
              <div className="border-l border-l-4 border-l-purple-600 pl-6">
                <h4 className="text-gray-100 text-xl mb-2">
                  Welcome to my Portfolio
                </h4>
                <div>
                  <h1 className="text-2xl">Hi! I'm Pooja, I'm a</h1>
                  <ReactTyped
                    strings={[
                      "BackEnd Developer",
                      "Web Developer",
                      "Full-stack Developer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop
                  >
                    <input
                      type="text"
                      className="text-2xl font-bold block w-full bg-transparent text-white outline-none mb-4"
                    />
                  </ReactTyped>
                </div>
              </div>
              <p className="text-white text-md mb-6">
                Full-Stack Software Engineer | Expertise in Laravel, Vue.js,
                React, Node.js Creating Scalable and Robust Web Applications
              </p>
              <a
                href="tel:"
                className="inline-block bg-purple-700 text-white rounded-lg p-4"
              >
                Let’s Connect
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <div className="flex justify-center items-center">
              <img
                src={HeroImage}
                alt=""
                className="h-96 w-99 rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
