import React from "react";
import QuickLink from "./QuickLink";

function QuickLinks() {
  return (
    <div>
      <h1 className="font-semibold uppercase font-face-gr">Quick Links</h1>
      <div className="py-2">
        <QuickLink name="Home" path={"/"} />
        <QuickLink name="About" path={"/about"} />
        <QuickLink name="Rooms" path={"/rooms"}/>
        <QuickLink name="Services & Facility" path={"/services&facilities"} />
        <QuickLink name="Restaurant & Bar" path={"/restaurant&bar"}/>
        <QuickLink name="Banquets / Leisure Area" path={"/banquets&leisurearea"} />
        <QuickLink name="Contact Us" path={"/contactus"}/>
      </div>
    </div>
  );
}

export default QuickLinks;
