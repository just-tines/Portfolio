import React from "react";
import Typed from "react-typed";
import myImage from "../assets/mark.jpg";


const PDF_URL = "src/assets/Mark-Justine-Alvarez-Cvitae.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "Mark-Justine-Alvarez-Cvitae.pdf"; 
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="text-white bg-black font-signature w-full py-[2rem] px-4">
      <div className="w-full text-center my-5 flex flex-col justify-center">
        <div className="flex items-center justify-center">
          <img className="w-48 rounded-full" src={myImage} alt="Description" />
        </div>

        <div className="flex  flex-col justify-center">
          <h1 className="md:text-4xl sm:text-2xl text-xl font-bold md:py-4">
            Mark Justine Alvarez
          </h1>
          <p className="text-[#e3e3e6] text-center font-bold py-4 rounded-lg shadow-md px-[6rem] mx-4">
            As a recent IT graduate with a passion for web development, I stand
            at the threshold of a promising career in the ever-evolving field of
            front-end development. This essay serves as a narrative of my
            journey, my aspirations, and the qualities that make me a
            well-suited candidate for the role of a web front-end developer.
          </p>
        </div>

        <div className="flex justify-center items-center ">
          <p className="md:text-2xl text-xl font-bold pl-2">
            fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl font-bold pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 ">
          Monitor your data analytics to increase revenue for{" "}
          {
            <Typed
              className="md:text-2xl sm:text-xl font-bold pl-2"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          }{" "}
          platforms.
        </p>
        <button
          onClick={handleDownload}
          className="bg-[#00df9a] w-32 rounded-md font-bold my-6 mx-auto py-2 text-white hover:bg-[#00b88a] focus:outline-none"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Hero;
