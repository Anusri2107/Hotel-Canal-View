import React from "react";
import { IoBedOutline } from "react-icons/io5";

function ServiceCard() {
  return (
    <div className="duration-300 hover:bg-[color:var(--color2)] hover:shadow-[color:var(--color5)] hover:shadow-md">
      <div className="flex items-center justify-around px-5 gap-5 xl:gap-0 py-10">
        <IoBedOutline className="text-5xl" />
        <div className="flex flex-col xl:w-2/3">
          <h1 className="font-face-ta font-semibold text-xl">Service</h1>
          <p className="font-face-fl text-lg">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
