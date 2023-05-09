import React from "react";
import progressive from "../assets/progressive.svg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="home" className="h-auto pt-24 pb-20  ">
      <div className="sm:flex-col lg:grid lg:grid-cols-2">
        <div className="text-center lg:my-auto">
          <h1 className="text-5xl sm:text-7xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Harrison Payne
          </h1>
          <h2 className="lg:text-2xl">Software Engineer / Web Developer</h2>
          <div className="flex justify-center gap-8 pt-4">
            <a href="mailto:hpayne13@gmail.com">
              <AiOutlineMail
                className="hover:scale-105 hover:ease-out hover:text-primary"
                size={30}
              />
            </a>
            <a href="https://www.linkedin.com/in/harrison-payne-4bb2b99a/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin
                className="hover:scale-105 hover:ease-out hover:text-primary"
                size={30}
              />
            </a>
            <a href="https://github.com/Lupercal13" target="_blank" rel="noopener noreferrer">
              <BsGithub
                className="hover:scale-105 hover:ease-out hover:text-primary"
                size={30}
              />
            </a>
          </div>
        </div>
        <div className="pt-20 flex justify-center">
          <img className="w-[80%]" src={progressive} alt="" />
        </div>
      </div>
      <div className=" text-center pt-20">
        <a href="#portfolio">
          <button className="btn btn-primary btn-lg w-3/4">Portfolio</button>
        </a>
      </div>
      <div className="text-center pt-8">
        <a href="#contact">
          <button className="btn btn-primary btn-lg w-3/4">Contact Me</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
