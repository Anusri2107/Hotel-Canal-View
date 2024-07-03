import React from "react";


function Title({name,desc}) {
  return (
    <div className="px-5 py-3 lg:px-10 xl:px-20 xl:py-5">
      <div className="mt-5 xl:mt-20">
      <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:w-1/2 text-white font-face-ta '>{name}</h1>
        <p className="font-face-ta text-xl md:text-2xl xl:w-1/2 text-white ">{desc}</p>
      </div>
    </div>
  );
}

export default Title;
