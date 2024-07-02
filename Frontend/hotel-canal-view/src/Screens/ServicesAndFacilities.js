import React from 'react'
import Footer from "../Components/Footer/Footer";
import Title from '../Components/Title';
import Services from '../Components/Services&Facilities/Services'
import Facilities from '../Components/Services&Facilities/Facilities';
import Navbar from '../Components/Navbar/Navbar';
import ScrollButton from '../Components/ScrollButton';

function ServicesAndFacilities() {
  return (
    <div>
        <div className='servicesandfacilities'>
            <Navbar/>
            <Title name="Our Services & Facilities" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
        </div>
        <Facilities/>
        <Services/>
        <ScrollButton/>
        <Footer/>
    </div>
  )
}

export default ServicesAndFacilities
