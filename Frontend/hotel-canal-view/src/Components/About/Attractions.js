import React from "react";
import attraction from "../../assets/attractions.jpg";

function Attractions() {
  return (
    <div>
      <div className="mt-10">
        <div className="relative flex w-80 flex-col rounded-xl bg-[color:var(--color2op)] bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white hover:shadow-lg hover:shadow-[color:var(--color4op)] duration-300 transition-all ease-in-out cursor-pointer">
            <img src={attraction} alt=""/>
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-face-ta text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              PLACE
            </h5>
            <p className="font-face-fl block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              className="font-face-ta select-none rounded-lg bg-[color:var(--color4)] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[color:var(--color4)]/20 transition-all hover:shadow-lg hover:shadow-[color:var(--color4op)] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attractions;
