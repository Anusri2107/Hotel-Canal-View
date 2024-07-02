import React from 'react'
import Footer from "../Components/Footer/Footer";
import Title from '../Components/Title';
import Contact from '../Components/ContactUs/Contact';
import Navbar from '../Components/Navbar/Navbar';
import ScrollButton from '../Components/ScrollButton';

function ContactUs() {
  return (
    <div>
        <div className='contact'>
            <Navbar/>
            <Title name="Contact Us" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
        </div>
        <Contact/>
        <ScrollButton/>
        <Footer/>
    </div>
  )
}

export default ContactUs
