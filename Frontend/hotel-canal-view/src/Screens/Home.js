import React from "react";
import Footer from "../Components/Footer/Footer";
import Services from "../Components/Home/Services";
import Hotel from "../Components/Home/Hotel";
import Banner from "../Components/Home/Banner";
import Sliders from "../Components/Home/Sliders";
import Testimonials from "../Components/Home/Testimonials";
import Navbar from "../Components/Navbar/Navbar";
import ScrollButton from "../Components/ScrollButton";

function Home() {
  return (
    <div>
      <div class="home">
        <Navbar />
        <Banner />
      </div>
      <div className="">
        <Hotel />
        <Services />
        <Sliders/>
        <Testimonials/>
        <ScrollButton/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
