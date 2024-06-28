import React, { useEffect, useState } from "react";
import SliderCard from "./SliderCard";
import axios from "axios";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function Sliders() {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const getRoom = async () => {
      try {
        const res = await axios.get("https://hotel-canal-view-6.onrender.com/room");
        console.log(res.data);
        setRoom(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRoom();
  }, []);

  return (
    <div className="px-5 py-3 mt-10 xl:px-20 xl:py-5">
      <h1 className="text-4xl font-face-gr-bold uppercase">OUR ROOMS</h1>
      <div className="p-10">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-56 overflow-hidden rounded-lg xl:h-[500px] ">
            {room?.map((item) => (
              <SliderCard key={item} room={item} />
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-[color:var(--color2op)] rounded-full group-hover:bg-[color:var(--color2op)] group-focus:outline-none">
              <GrFormPrevious className="text-2xl font-extrabold text-[color:var(--color1)]" />
              <span className="sr-only">Previous</span>
            </div>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-[color:var(--color2op)] rounded-full group-hover:bg-[color:var(--color2op)] group-focus:outline-none">
              <GrFormNext className="text-2xl font-extrabold text-[color:var(--color1)]" />
              <span className="sr-only">Next</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sliders;
