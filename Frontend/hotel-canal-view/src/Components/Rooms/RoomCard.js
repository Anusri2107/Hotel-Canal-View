import React, { useRef } from "react";
import useIsVisible from "../../effects/useIsVisible";
import room1 from "../../assets/Room 1.jpg";

function RoomCard({ item }) {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="py-4">
      <div
        ref={ref1}
        className={`mx-auto lg:h-64 w-80 lg:w-[800px] hover:bg-[color:var(--color2op)] bg-[color:var(--color2op)] border-1 border-[color:var(--color1)] overflow-hidden hover:shadow-xl hover:shadow-[color:var(--color3op)] hover:rounded-2xl duration-700 transition-all ease-in-out ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="content-center flex flex-col lg:flex-row lg:gap-2 items-center justify-center">
          <div className="h-64 w-80">
            <img src={room1} alt={item.name} className="h-full" />
          </div>
          <div className="p-2 lg:h-64 lg:w-[500px] font-face-ta flex flex-col justify-around">
            <div className=" text-xl font-semibold">{item.name}</div>
            <p className="font-face-gr">{item.description}</p>
            <div className="p-2 px-5 list-disc font-face-gr">
              <li>Feature 1</li>
              <li>Feature 2</li>
            </div>
            <div className="flex items-center justify-between px-2">
              <div>
                {item.facilities}
              </div>
              <div className="space-x-2">
                <span className="text-lg font-semibold font-face-ta">
                  &#8377; {item.rate}
                </span>
                <button className="bg-[color:var(--color4)] font-semibold p-2 transition-all duration-200 hover:shadow-md hover:shadow-[color:var(--color4op)] text-white focus:bg-[color:var(--color2)] focus:ring-2 focus:ring-[color:var(--color4)] focus:text-[color:var(--color4)]">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
