import React, { useRef } from "react";
import hotel from "../../assets/hotel.jpg";
import useIsVisible from "../../effects/useIsVisible";

function Hotel() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row items-center justify-center xl:justify-around px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
      <div
        ref={ref1}
        className={`w-full xl:w-1/2 transition-all ease-in duration-1000  ${
          isVisible1
            ? "translate-none opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <img
          src={hotel}
          alt="hotel"
          className="mx-auto xl:m-0 w-75% xl:h-[400px] rounded-xl"
        ></img>
      </div>
      <div
        ref={ref1}
        className={`flex flex-col justify-center xl:w-1/2 text-center xl:text-right xl:space-y-5 transition-all ease-in-out duration-1000 ${
          isVisible1
            ? "translate-none opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <h1 className="text-4xl font-face-gr-bold uppercase">Our Hotel</h1>
        <p className="font-face-gr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          asperiores possimus ab nulla! Voluptates accusantium possimus, unde
          corporis doloremque sapiente enim nam voluptatem suscipit
          perspiciatis!
        </p>
      </div>
    </div>
  );
}

export default Hotel;
