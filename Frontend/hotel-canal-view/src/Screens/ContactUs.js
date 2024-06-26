import React from 'react'
import Footer from "../Components/Footer/Footer";
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact';
import Title from '../Components/Title';

function ContactUs() {
  return (
    <div>
        <div className='contact'>
            <Navbar/>
            <Title name="Contact Us" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactUs
