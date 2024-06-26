import React from "react";
import facilities from "../assets/services&facilities.jpg";

function Facilities() {
  return (
    <div className="px-5 py-3 xl:px-20 xl:py-5 my-10">
      <div className="flex flex-col  xl:flex-row xl:space-x-20 xl:gap-10 py-5">
        <div className="xl:w-1/2">
          <h1 className="text-4xl font-face-gr-bold uppercase">Facilities</h1>
          <h3 className="text-lg font-face-gr font-semibold uppercase text-[color:var(--color5)]">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="mt-10 font-face-gr text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            adipisci corporis. Iusto deserunt illo rerum exercitationem?
            Voluptates soluta corporis exercitationem ipsum veniam alias commodi
            sed assumenda rerum nam aperiam voluptate, nemo architecto dolores.
            Repellendus facilis iusto voluptatem, non pariatur alias quos
            quibusdam ipsum accusantium vel beatae velit deleniti in saepe
            nostrum quisquam tenetur. Atque sit, et eius cumque ullam incidunt
            numquam quod at alias, commodi eos! Molestias aliquam officia
            voluptas cumque praesentium tempora repellat minima iste doloremque
            veniam, nihil deleniti iure vero facilis fuga necessitatibus tenetur
            debitis dicta eum provident aperiam aut placeat repellendus. Veniam
            quaerat officia labore quis nihil.
          </p>
        </div>
        <div className="relative mt-10 w-1/2 gap-5">
          <div className="relative h-[300px] w-full xl:h-[400px] xl:w-1/2">
            <img
              src={facilities}
              alt=""
              className="absolute block h-full object-cover"
            />
            <img
              src={facilities}
              alt=""
              className="absolute block h-full object-cover translate-x-2/3 translate-y-1/4 shadow-md shadow-[color:var(--color3)] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
