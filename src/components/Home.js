import React from "react";
import avatar from "../assets/avatar.jpg";

const pdf_File = "../../Mark_Justine_alvarezCvitae.pdf";

const Home = () => {
  const downloadCV = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div
      name="home"
      className="py-48 w-full bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
    >
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full">
        <div className="text-center mx-5 py-5">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full max-h-min mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="text-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Front-End Developer.
          </h2>
          <p className="text-white text-center font-light text-lg sm:text-lg py-4 justify-center">
            As a recent IT graduate, I aim to secure a dynamic entry-level
            position in the industry to apply my academic knowledge and skills,
            while contributing my fresh perspective and enthusiasm to a team in
            a supportivr and innovative environment where I can continously
            learn learn and grow.
          </p>
          <div className="flex justify-center">
            <a
              href="/Mark_Justine_alvarezCvitae.pdf"
              download="Mark_Justine_alvarezCvitae.pdf"
            >
              <button
                onClick={() => {
                  downloadCV(pdf_File);
                }}
                className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:scale-105 transition-transform duration-300"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
