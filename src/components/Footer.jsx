import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="mx-4">
      <div>
        <h1 className="text-xl font-semibold pt-2">Harrison Payne</h1>

        <div className="flex gap-8 pt-4">
          <a href="mailto:hpayne13@gmail.com">
            <AiOutlineMail
              className="hover:scale-[101%] ease-out hover:text-[#6159e5] hover:cursor-pointer"
              size={20}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/harrison-payne-4bb2b99a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin
              className="hover:scale-[101%] ease-out hover:text-[#6159e5] hover:cursor-pointer"
              size={20}
            />
          </a>
          <a
            href="https://github.com/Lupercal13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub
              className="hover:scale-[101%] ease-out hover:text-[#6159e5] hover:cursor-pointer"
              size={20}
            />
          </a>
        </div>
        <div className="flex items-center pt-4 gap-2">
          <AiOutlineCopyright /> <p className="text-sm">PayneDevHaus {date}</p>
        </div>
        <p className="text-sm text-gray-500 leading-3">
          Thanks for taking a look!
        </p>
      </div>
    </div>
  );
};

export default Footer;
