import React from "react";
import {} from "react-router-hash-link"
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

function Copyright() {
  return (
    <div>
      <div>
        <div className="flex flex-col xl:flex-row items-center justify-between py-2 mt-5 gap-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <HashLink to="/policies" className="pr-2 border-r-2 hover:text-[color:var(--color1)] cursor-pointer">
              Privacy Policy
            </HashLink>
            <HashLink to="/policies#cancellation-policy" className="pr-2 border-r-2 hover:text-[color:var(--color1)] cursor-pointer">
              Cancellation Policy
            </HashLink>
            <HashLink to="/policies#refund-policy" className="pr-2 border-r-2 hover:text-[color:var(--color1)] cursor-pointer">
              Refund Policy
            </HashLink>
            <HashLink to="/policies#terms&conditions" className="hover:text-[color:var(--color1)] cursor-pointer">
              Terms & Conditions
            </HashLink>
          </div>
          <div className="text-center font-face-gr">
            <h1>ALL RIGHTS RESERVED - HOTEL CANAL VIEW - JALPAIGURI</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
