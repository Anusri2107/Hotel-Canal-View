import React from 'react'
import Footer from "../Components/Footer/Footer";
import Title from '../Components/Title';
import AboutUs from '../Components/About/AboutUs';
import Navbar from '../Components/Navbar/Navbar';

function About() {
  return (
    <div>
        <div className='about'>
        <Navbar/>
        <Title name="About Us" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
        </div>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default About
