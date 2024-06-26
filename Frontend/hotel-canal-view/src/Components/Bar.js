import React, { useRef } from "react";
import bar from "../assets/bar.jpg";
import useIsVisible from "../effects/useIsVisible";

function Bar() {
  const ref1 = useRef();
  const ref2 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  return (
    <div className="py-8 my-20">
      <div className="flex flex-col-reverse xl:flex-row xl:space-x-20 xl:gap-10 py-5">
        <div className="relative mt-10 w-1/2 gap-5">
          <div className="relative h-[300px] w-full xl:h-[400px] xl:w-1/2">
            <img
              ref={ref1}
              src={bar}
              alt=""
              className={`absolute block h-full object-cover duration-1000 transition-all ease-in-out ${
                isVisible1 ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              ref={ref2}
              src={bar}
              alt=""
              className={`absolute block h-full object-cover translate-x-2/3 translate-y-1/4 shadow-lg shadow-[color:var(--color2)] duration-1000 transition-all ease-in-out ${
                isVisible2
                  ? "translate-x-2/3 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            />
          </div>
        </div>
        <div className="xl:w-1/2">
          <h1 className="text-4xl font-face-gr-bold">BAR</h1>
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
          <p className="p-5 text-center font-face-fl text-lg">
            <span className="font-bold">Timing:</span> 10 A.M. to 10 P.M.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bar;
