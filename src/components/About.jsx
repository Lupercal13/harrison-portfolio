import React from "react";
import profile from "../assets/profile.svg";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoPython,
} from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const About = () => {
  return (
    <div id="about" className="pt-8 bg-gray-300 text-gray-700">
      <div className="text-center pb-24">
        <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700  text-center sm:pl-20] drop-shadow-xl text-4xl sm:text-6xl">
          Nice to meet you!
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 ">
        <div className="flex justify-center">
          <img className=" w-[80%] sm:w-full pt-10" src={profile} alt="" />
        </div>

        <div className="sm:mx-8 sm:py-8 text-center pt-10 mx-4 pb-8">
          <p className="tracking-wide">
            My name is{" "}
            <span className="font-semibold text-lg">Harrison Payne</span>.
            <br />
            Your new{" "}
            <span className="text-lg font-semibold">
              software engineer / web developer!
            </span>{" "}
            <br />
            <br />
            I am a hard working developer with a keen eye to details and end
            user satisfaction. I take pride in the face that I am constantly
            learning and keeping updated on the latest technologies in order to
            provide the best service to my clients. <br />
            <br /> I have been working as a freelance web developer for the past
            year helping small business owners build the landing page they need
            to advance their business.
            <br />
            <br />
            Having lived in Japan for the last 9 years I am well adept to
            communication challenges and working with clients from varying
            background and countries. <br />
            <br />I look forward to working with you and your team!
          </p>
        </div>
      </div>
      <div className="border-t border-2 border-black mx-8 mb-10">

      </div>
      <div className="sm:mr-36 sm:ml-8 flex-col justify-center  sm:justify-between gap-10 items-center">
        <h1 className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 text-3xl text-center sm:pl-20 pb-10">The Tools I Use</h1>
        <div className="sm:grid sm:grid-cols-3 sm:gap-10 ">
          <div className="flex flex-col items-center py-4 ">
            <IoLogoHtml5
              size={40}
              className="hover:text-[#6c63ff] hover:scale-[102%] duration-75 ease-out "
            />
            <p>HTML5</p>
          </div>
          <div className="flex flex-col items-center py-4">
            <IoLogoCss3
              size={40}
              className="hover:text-[#6c63ff] hover:scale-[102%] duration-75 ease-out "
            />
            <p>CSS3</p>
          </div>
          <div className="flex flex-col items-center py-4">
            <IoLogoJavascript
              size={40}
              className="hover:text-[#6c63ff] hover:scale-[102%] duration-75 ease-out "
            />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center py-4">
            <IoLogoPython
              size={40}
              className="hover:text-[#6c63ff] hover:scale-[102%] duration-75 ease-out "
            />
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center py-4">
            <FaReact
              size={40}
              className="hover:text-[#6c63ff] hover:scale-[102%] duration-75 ease-out "
            />
            <p>ReactJS</p>
          </div>
          <div className="flex flex-col items-center py-4">
            <SiTailwindcss
              size={40}
              className="hover:text-[#6c63ff] hover:scale-[102%] duration-75 ease-out "
            />
            <p>TailwindCSS</p>
          </div>
        </div>
      </div>
      <div className="border-t border-2 border-black mx-8 mt-8">

</div>
    </div>
  );
};

export default About;
