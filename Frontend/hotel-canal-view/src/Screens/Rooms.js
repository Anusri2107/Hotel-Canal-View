import React from 'react'
import Footer from '../Components/Footer/Footer'
import Title from '../Components/Title'
import Room from "../Components/Rooms/Room"
import Navbar from '../Components/Navbar/Navbar'
import ScrollButton from '../Components/ScrollButton'

function Rooms() {
  return (
    <div>
        <div className='room'>
            <Navbar/>
            <Title name="Our Rooms" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
        </div>
        <Room/>
        <ScrollButton/>
        <Footer/>
    </div>
  )
}

export default Rooms
