import React from "react";
import Reach from "./Reach";
import QuickLinks from "./QuickLinks";
import Updates from "./Updates";
import Copyright from "./Copyright";

function Footer() {
  return (
    <div className="px-5 py-3 lg:px-10 xl:px-20 xl:py-5 flex flex-col bg-[color:var(--color5)] text-white">
      <div className=" flex flex-col justify-between lg:flex-row border-b-2">
        <div>
          <Reach />
        </div>
        <div>
          <QuickLinks />
        </div>
        <div>
          <div className="lg:text-right my-auto flex flex-col gap-5 py-10">
            <div>LOGO</div>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg font-semibold font-face-gr">HOTEL CANAL VIEW</h1>
              <p className="font-face-gr">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, amet.
              </p>
            </div>
            <div>
              <Updates />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Copyright />
      </div>
    </div>
  );
}

export default Footer;
