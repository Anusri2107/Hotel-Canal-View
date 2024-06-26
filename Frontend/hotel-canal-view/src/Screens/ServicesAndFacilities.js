import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer/Footer";
import Title from '../Components/Title';
import Amenities from '../Components/Amenities';
import Facilities from '../Components/Facilities';

function ServicesAndFacilities() {
  return (
    <div>
        <div className='servicesandfacilities'>
            <Navbar/>
            <Title name="Our Services & Facilities" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
        </div>
        <Facilities/>
        <Amenities/>
        <Footer/>
    </div>
  )
}

export default ServicesAndFacilities
