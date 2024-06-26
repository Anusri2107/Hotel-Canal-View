import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import room3 from "../../assets/Room 3.jpg";

function SliderCard({ room }) {
  return (
    <div
      className="hidden duration-700 ease-in-out bg-[color:var(--color2)] h-full w-full"
      data-carousel-item
    >
      <div className="bg-[color:var(--color3)] h-full">
        <div className="block group cursor-default">
          <img
            className="absolute inset-0 object-cover 
                                w-full h-full"
            src={room3}
            alt=""
          />
          <div className="relative">
            <div
              className="h-full xl:w-1/4 transition-all duration-1000 ease-in transform 
                                -translate-x-full opacity-0 bg-[color:var(--color1)]
                                group-hover:opacity-100 
                                group-hover:translate-x-0"
            >
              {/* Hidden content */}
              <div
                className="transition-all duration-1000 ease-in transform 
                                -translate-x-full opacity-0
                                group-hover:opacity-100 
                                group-hover:translate-x-0"
              >
                <div className="flex flex-col justify-around gap-4 xl:gap-10 p-5 xl:pb-10 xl:pt-40 text-[color:var(--color2)] ">
                  <h1 className="text-2xl xl:text-4xl font-face-ta uppercase">
                    {room.name}
                  </h1>
                  <p className="font-face-gr">{room.description}</p>
                  <Link to="/rooms">
                    <button className="flex  items-center justify-center gap-2 bg-[color:var(--color4)] w-1/2 p-2 xl:py-5 focus:ring-2 focus:ring-[color:var(--color4)] focus:bg-[color:var(--color2)] focus:text-[color:var(--color4)] group/button">
                      READ MORE
                      <FiArrowRight className="text-lg transition-all duration-200 group-hover/button:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
              {/* End of hidden content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
