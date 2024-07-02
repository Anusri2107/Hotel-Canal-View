import React from "react";
import Restaurant from "./Restaurant";
import Bar from "./Bar";

function RestaurantBar() {
  return (
    <div className="px-5 py-3 lg:px-10 xl:px-20 xl:py-5 my-10">
      <Restaurant/>
      <Bar/>
    </div>
  );
}

export default RestaurantBar;
