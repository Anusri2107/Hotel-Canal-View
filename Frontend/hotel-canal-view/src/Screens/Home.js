import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";
import Services from "../Components/Home/Services";
import Hotel from "../Components/Home/Hotel";
import Banner from "../Components/Home/Banner";
import Sliders from "../Components/Home/Sliders";
import Testimonials from "../Components/Home/Testimonials";

function Home() {
  return (
    <div className="scroll-smooth">
      <div class="container">
        <Navbar />
        <Banner />
      </div>
      <div className="my-10">
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
