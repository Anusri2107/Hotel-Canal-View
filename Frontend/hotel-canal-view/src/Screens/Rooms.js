import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import Room from '../Components/Room'

function Rooms() {
  return (
    <div>
        <div className='room'>
            <Navbar/>
            <Title name="Our Rooms" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
        </div>
        <Room/>
        <Footer/>
    </div>
  )
}

export default Rooms
