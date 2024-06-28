import React from "react";
import Dates from "./Dates";
import Adults from "./Adults";
import Children from "./Children";
import RoomOption from "./RoomOption";

function BookForm() {
  return (
    <form className="w-full">
      <div className="flex flex-col h-full w-full items-center justify-center">
        <div className="w-[300px]  bg-[color:var(--color2)] mb-5">
          <div className="flex-1">
            <Dates />
          </div>
          <div className="flex flex-col pb-5">
            <div className="flex-1">
              <Adults />
            </div>
            <div className="flex-1">
              <Children />
            </div>
            <div className="flex-1">
              <RoomOption />
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="bg-[color:var(--color4)] px-6 py-4 text-[color:var(--color2)] hover:bg-[color:var(--color2)] hover:text-[color:var(--color4)] duration-200 hover:ring-1 hover:ring-[color:var(--color4)] focus:ring-2 focus:ring-[color:var(--color4)] focus:bg-[color:var(--color2)] focus:text-[color:var(--color4)] "
          >
            Check Availability
          </button>
        </div>
      </div>
    </form>
  );
}

export default BookForm;
