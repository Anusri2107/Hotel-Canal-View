import React from "react";
import Banquet from "./Banquet";
import LeisureArea from "./LeisureArea";

function BanquetLeisure() {
  return (
    <div className="px-5 py-3 xl:px-20 xl:py-5 my-10">
      <Banquet/>
      <LeisureArea/>
    </div>
  );
}

export default BanquetLeisure;
