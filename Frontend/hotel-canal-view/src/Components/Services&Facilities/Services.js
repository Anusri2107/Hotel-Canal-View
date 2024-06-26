import React from "react";
import ServiceCard from "./ServiceCard.js";
import OtherServices from "./OtherServices.js";

function Amenities() {
  return (
    <div className="px-5 py-3 xl:px-20 xl:py-5 my-20">
      <div>
        <h1 className="text-4xl font-face-gr-bold uppercase">Services</h1>
        <div className="p-10">
          <div className="mt-10 p-5 bg-[color:var(--color3op)] shadow-md shadow-[color:var(--color5)]">
            <h1 className="text-center font-face-gr-bold font-bold text-3xl">
              Room Services
            </h1>
            <div className="grid xl:grid-cols-3 gap-5 xl:gap-10 justify-around py-10">
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
          <div className="mt-10 p-5 bg-[color:var(--color3op)] shadow-md shadow-[color:var(--color5)]">
            <h1 className="text-center font-face-gr-bold font-bold text-3xl">
              Other Services
            </h1>
            <div className="flex flex-col xl:flex-row justify-around px-10 xl:px-20 py-10 space-y-2">
              <div className="space-y-2">
                <OtherServices />
                <OtherServices />
                <OtherServices />
                <OtherServices />
                <OtherServices />
                <OtherServices />
                <OtherServices />
                <OtherServices />
              </div>
              <div className="space-y-2">
                <OtherServices />
                <OtherServices />
                <OtherServices />
                <OtherServices />
                <OtherServices />
                <OtherServices />
                <OtherServices />
                <OtherServices />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amenities;
