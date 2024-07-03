import React from "react";
import hotel from "../../assets/hotel.jpg";

function Hotel() {

  return (
    <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row items-center justify-center xl:justify-around px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
      <div
        className={`w-full xl:w-1/2`}
      >
        <img
          src={hotel}
          alt="hotel"
          className="mx-auto xl:m-0 w-75% xl:h-[400px] rounded-xl"
        ></img>
      </div>
      <div
        className={`flex flex-col justify-center xl:w-1/2 text-center xl:text-right xl:space-y-5`}
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
