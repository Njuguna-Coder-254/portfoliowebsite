import React from "react";
import{FaUserAlt} from "react-icons/fa";
import{MdOutlineAlternateEmail}from "react-icons/md";
import{BsWhatsapp}from "react-icons/bs";

const About = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row  px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <p className=" text-3xl font-bold text-black dark:text-white">About Me</p>
      <p className=" text-lg text-black dark:text-gray-400 leading-10 justify-center">
        Full-Stack Web & App Developer with ability to learn and collaborate in
        rapidly changing environments and compositions. Worked through hours of
        bootcamp structure, learning JavaScript, NodeJs, ReactJs, NextJs, Mobile
        App Development with Java and TypeScript. Eager to tackle web and App
        development/design challenges to achieve lasting impacts on user
        experience.
      </p>
      
    </div>
  );
};

export default About;
