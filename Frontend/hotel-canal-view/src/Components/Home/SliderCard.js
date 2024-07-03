import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import room3 from "../../assets/Room 3.jpg";

function SliderCard({ room }) {
  return (
    <div className="bg-[color:var(--color2)] h-full w-full" data-carousel-item>
      <div className="bg-[color:var(--color1)] h-full group">
        <img
          className="absolute object-cover h-full w-full"
          src={room3}
          alt=""
        />
        <div className="relative h-full lg:w-1/3 xl:w-1/4 bg-[color:var(--color1)] transition-all duration-1000 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
          <div className="flex flex-col py-2 lg:py-10 px-5 h-full justify-end lg:gap-4">
            <h1 className="text-3xl xl:text-5xl text-[color:var(--color2)] font-face-ta">
              {room.name}
            </h1>
            <div className="flex flex-col justify-end gap-2">
              <p className="text-[color:var(--color2)] font-face-gr">
                {room.description}
              </p>
              <Link to="/rooms">
                <button className="flex text-[color:var(--color2)] items-center justify-center gap-2 bg-[color:var(--color4)] w-1/2 px-1 py-2 md:p-2 xl:py-5 focus:ring-2 focus:ring-[color:var(--color4)] focus:bg-[color:var(--color2)] focus:text-[color:var(--color4)] group/button">
                  READ MORE
                  <FiArrowRight className="text-lg transition-all duration-200 group-hover/button:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
