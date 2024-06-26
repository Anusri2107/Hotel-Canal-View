import React, { useRef } from "react";
import useIsVisible from "../effects/useIsVisible";
import room1 from "../assets/Room 1.jpg";

function RoomCard({ item }) {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="py-4">
      <div
        ref={ref1}
        className={`mx-auto xl:h-64 w-80 xl:w-[800px] hover:bg-[color:var(--color2op)] bg-[color:var(--color2op)] border-1 border-[color:var(--color1)] hover:shadow-xl hover:rounded-2xl duration-700 transition-all ease-in-out ${
          isVisible1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="content-center flex flex-col xl:flex-row xl:gap-2 items-center justify-center">
          <div className="h-64 w-80">
            <img src={room1} alt={item.name} className="h-full" />
          </div>
          <div className="p-2 xl:h-64 xl:w-[500px] font-face-ta flex flex-col justify-around">
            <div className=" text-xl font-semibold">{item.name}</div>
            <p className="font-face-gr">{item.description}</p>
            <div className="p-2 list-disc font-face-gr">
              <li>Feature 1</li>
              <li>Feature 2</li>
            </div>
            <div className="flex items-center justify-between px-2">
              <div>
                {/* <button
                  className="bg-[color:var(--color4)] px-2 py-1 rounded-md text-white hidden xl:block"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Facilities
                </button>
                <dialog
                  id="my_modal_3"
                  className="items-center justify-center mx-auto my-auto rounded-md bg-[color:var(--color2)] text-[color:var(--color3)] "
                >
                  <div className="p-4">
                    <form method="dialog" className="">
                      if there is a button in form, it will close the modal
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg text-[color:var(--color1)] ">
                      Amenities
                    </h3>
                    <div className="p-5 flex items-center justify-between gap-5">
                      <div className="flex flex-col items-center">
                        <div className="flex flex-row items-center gap-1">
                          <GiCheckMark className="text-xs" />
                          <p>Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex flex-row items-center gap-1">
                          <GiCheckMark className="text-xs" />
                          <p>Lorem ipsum dolor sit.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </dialog> */}
                {item.facilities}
              </div>
              <div className="space-x-2">
                <span className="text-lg font-semibold font-face-ta">
                  &#8377; {item.rate}
                </span>
                <button className="bg-[color:var(--color4)] font-semibold p-2 transition-all duration-200 hover:shadow-lg text-white focus:bg-[color:var(--color2)] focus:ring-2 focus:ring-[color:var(--color4)] focus:text-[color:var(--color4)]">
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
