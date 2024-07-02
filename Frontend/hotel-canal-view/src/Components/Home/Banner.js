import React from "react";
import BookForm from "../BookForm/BookForm";

function Banner() {
  return (
    <div className="flex flex-col xl:flex-row w-full">
      <div className="px-5 py-3 lg:px-10 xl:px-20 xl:py-5 xl:w-1/2 mt-6 xl:mt-10">
        <h3 className="text-white font-face-gr-bold text-2xl py-4">HOTEL CANAL VIEW</h3>
        <h1 className="text-white font-bold font-face-ta text-4xl">
        Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-white mt-6 text-lg font-face-gr">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?
        </p>
        
      </div>
      <div className=" mx-auto mt-6 xl:mt-20 mb-10">
        <div className="bg-[color:var(--color1)] mt-4 p-4 shadow-xl">
          <BookForm/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
