import React from "react";
import room3 from "../../assets/Room 3.jpg";
import banquets from "../../assets/banquets.jpg";
import {
  MdDirectionsBus,
  MdDirectionsRailway,
  MdLocalAirport,
  MdLocationCity,
  MdOutlineBedroomParent,
  MdOutlineDining,
} from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import Attractions from "./Attractions";

function AboutUs() {
  return (
    <div className="px-5 py-3 xl:px-20 xl:py-5 my-10">
      <div className="flex flex-col xl:flex-row xl:space-x-20 py-5">
        <div className="xl:w-1/2">
          <h1 className="text-4xl font-face-gr-bold">OUR HOTEL</h1>
          <h3 className="text-lg font-face-gr font-semibold uppercase text-[color:var(--color5)]">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="mt-10 text-justify font-face-gr">
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
        <div className="mt-10 xl:w-1/2 flex flex-col xl:flex-row gap-5">
          <div className="relative flex bg-[color:var(--color2op)] h-[400px] xl:w-1/2">
            <img
              src={room3}
              alt=""
              className="absolute block h-full object-cover opacity-50"
            />
            <div className="absolute h-full w-full top-64 left-5">
              <MdOutlineBedroomParent className="text-6xl text-[color:var(--color1)]" />
              <h3 className="text-2xl font-face-ta font-semibold p-2 text-[color:var(--color1)]">
                Accomodation
              </h3>
            </div>
          </div>
          <div className="relative flex bg-[color:var(--color2op)] h-[400px] xl:w-1/2">
            <img
              src={banquets}
              alt=""
              className="absolute block h-full object-cover opacity-50"
            />
            <div className="absolute h-full w-full top-64 left-5">
              <MdOutlineDining className="text-6xl text-[color:var(--color1)]" />
              <h3 className="text-2xl font-face-ta font-semibold p-2 text-[color:var(--color1)]">
                Banquets
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <h1 className="text-4xl font-face-gr-bold text-center">OUR VISION</h1>
        <p className="text-center p-5 font-face-gr-italic text-[color:var(--color1)] text-xl">
          <RiDoubleQuotesL className="text-6xl text-[color:var(--color3)]" />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eum
          ab ipsum nesciunt rerum facilis doloremque soluta assumenda,
          exercitationem accusantium asperiores quod, tenetur et voluptate
          numquam ut, corporis velit adipisci doloribus illo ea est unde.
          Soluta, exercitationem recusandae. Sit facilis id, accusantium neque
          ab recusandae blanditiis doloribus. Natus, animi odio.
        </p>
        <div></div>
      </div>
      <div>
        <h1 className="text-4xl font-face-gr-bold">TOURIST ATTRACTIONS</h1>
        <h3 className="text-lg font-face-gr font-semibold uppercase text-[color:var(--color5)]">
          Lorem ipsum dolor sit amet
        </h3>
        <p className="mt-10 font-face-gr">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eum
          ab ipsum nesciunt rerum facilis doloremque soluta assumenda,
          exercitationem accusantium asperiores quod, tenetur et voluptate
          numquam ut, corporis velit adipisci doloribus illo ea est unde.
          Soluta, exercitationem recusandae. Sit facilis id, accusantium neque
          ab recusandae blanditiis doloribus. Natus, animi odio.
        </p>
        <div className="mt-10 flex flex-wrap flex-col xl:flex-row xl:justify-around gap-12 xl:gap-5 items-center">
          <Attractions />
          <Attractions />
          <Attractions />
          <Attractions />
        </div>
      </div>
      <div className="pt-20 xl:pb-5">
        <h1 className="text-4xl font-face-gr-bold">DISTANCE FROM PLACES</h1>
        <div className="mt-5 xl:mt-10">
          <div className="flex flex-col xl:flex-row gap-5 items-center justify-around">
            <div className="xl:w-1/4">
              <p className="mt-5 text-justify font-face-gr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                adipisci corporis. Iusto deserunt illo rerum exercitationem?
                Voluptates soluta corporis exercitationem ipsum veniam alias
                commodi sed assumenda rerum nam aperiam voluptate, nemo
                architecto dolores. Repellendus facilis iusto voluptatem, non
                pariatur alias quos quibusdam ipsum accusantium vel beatae velit
                deleniti in saepe nostrum quisquam tenetur. Atque sit, et eius
                cumque ullam incidunt numquam quod at alias, commodi eos!
                Molestias aliquam officia voluptas cumque praesentium tempora
                repellat minima iste doloremque veniam, nihil deleniti iure vero
                facilis fuga necessitatibus tenetur debitis dicta eum provident
                aperiam aut placeat repellendus. Veniam quaerat officia labore
                quis nihil.
              </p>
            </div>
            <div className="xl:w-1/4 space-y-2">
              <div className="flex flex-col justify-center p-5 bg-[color:var(--color2)] h-[100px]">
                <div className="gap-5 flex flex-row items-center">
                  <MdDirectionsRailway className="text-2xl" />
                  <h3 className="text-xl font-face-gr font-semibold">Railway Station</h3>
                </div>
                <p className="mx-14 font-face-gr-italic text-sm">
                  10 km Time: 1 hour
                </p>
              </div>
              <div className="flex flex-col justify-center p-5 bg-[color:var(--color2)] h-[100px]">
                <div className="gap-5 flex flex-row items-center">
                  <MdLocalAirport className="text-2xl" />
                  <h3 className="text-xl font-face-gr font-semibold">Airport</h3>
                </div>
                <p className="mx-14 font-face-gr-italic text-sm">
                  10 km Time: 1 hour
                </p>
              </div>
              <div className="flex flex-col justify-center p-5 bg-[color:var(--color2)] h-[100px]">
                <div className="gap-5 flex flex-row items-center">
                  <MdDirectionsBus className="text-2xl" />
                  <h3 className="text-xl font-face-gr font-semibold">Bus Stand</h3>
                </div>
                <p className="mx-14 font-face-gr-italic text-sm">
                  10 km Time: 1 hour
                </p>
              </div>
              <div className="flex flex-col justify-center p-5 bg-[color:var(--color2)] h-[100px]">
                <div className="gap-5 flex flex-row items-center">
                  <MdLocationCity className="text-2xl" />
                  <h3 className="text-xl font-face-gr font-semibold">City Center</h3>
                </div>
                <p className="mx-14 font-face-gr-italic text-sm">
                  10 km Time: 1 hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
