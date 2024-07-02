import React from "react";
import Footer from "../Components/Footer/Footer";
import Services from "../Components/Home/Services";
import Hotel from "../Components/Home/Hotel";
import Banner from "../Components/Home/Banner";
import Sliders from "../Components/Home/Sliders";
import Testimonials from "../Components/Home/Testimonials";
import Navbar from "../Components/Navbar/Navbar";

function Home() {
  return (
    <div className="scroll-smooth w-full">
      <div class="container h-full w-full">
        <Navbar />
        <Banner />
      </div>
      <div className="">
        <Hotel />
        <Services />
        <Sliders/>
        <Testimonials/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
