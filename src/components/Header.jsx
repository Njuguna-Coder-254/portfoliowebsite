import React from "react";
import { Mongodb, Nodejs, Reactjs, Redux } from "../assets";
import TypewriterComponent from "typewriter-effect";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
      <div className="flex flex-col mb-20 lg:mb-0"
      data-aos='fade-down'
      data-aos-offset='100'
      data-aos-delay='50'
      data-aos-duration='1000'
      data-aos-easing='ease-in-out'
      >
        <span className="text-lg font-bold text-orange-700">
          FULL-STACK WEB & APP DEVELOPER
        </span>
        <div className="flex gap-4 items-center my-4">
          <h1 className="text-gray-800 dark:text-neutral-100 text-5xl 2xl:text-7xl font-bold text-center">
            I'm a
          </h1>
          <div className=" font-bold text-center text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewriterComponent
            options={{
              strings:[
                "Full-Stack Developer.🌐",
                "ReactJs Developer.",
                "Mobile App Developer.",
                "Python Developer.",
                "NextJs Developer.",
                "Java Developer.",
              ],
              autoStart:true,
              loop:true
            }}
            />
          </div>
        </div>
        {/*<h1 className="text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider">
          ERIC NJUGUNA
          </h1>*/}
        <p className=" text-md text-black dark:text-gray-100 mt-5 2xl:mt-10">
          Full-Stack Web & App Developer with ability to learn and collaborate
          in rapidly changing environments and compositions.
        </p>
        <div className=" mt-10 flex gap-10">
          <a href="#contactme">
            <button className=" bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5">
              Hire Me
            </button>
          </a>
          <a href="#projects">
            <button className=" text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:bg-[#224cff10]">
              Projects
            </button>
          </a>
        </div>
      </div>
      <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] rounded-full border border-gray-600 dark:border-gray-200 relative md:mt-20 lg:mt-0 flex items-center justify-center">
        <div className="relative w-full h-full rounded-full"
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'>
          <img alt="" src={Reactjs}
          className=" absolute top-7 md:top-20 left-3
          2xl:left-8 w-12 h-12 md:w-20 md:h-20"/>
          <img alt="" src={Redux}
          className=" absolute bottom-7 md:bottom-20 left-3 
          2xl:left-12 w-12 h-12 md:w-20 md:h-20"/>
          <img alt="" src={Mongodb}
          className=" absolute top-3 md:top-20 right-0 
          2xl:right-8 w-16 h-16 md:w-20 md:h-20"/>
           <img alt="" src={Nodejs}
          className=" absolute bottom-7 md:bottom-20 right-3 
          2xl:right-12 w-12 h-12 md:w-20 md:h-20"/>

        </div>
      </div>
    </div>
  );
};

export default Header;
