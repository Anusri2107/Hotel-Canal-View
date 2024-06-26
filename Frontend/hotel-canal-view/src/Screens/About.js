import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer/Footer";
import AboutUs from '../Components/AboutUs';
import Title from '../Components/Title';

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
