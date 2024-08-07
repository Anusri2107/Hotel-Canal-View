import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <div className="px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
      <div>
        <h1 className="text-4xl font-face-gr-bold uppercase">OUR GUEST SAYS</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 p-10">
            <TestimonialCard/>
            <TestimonialCard/>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
