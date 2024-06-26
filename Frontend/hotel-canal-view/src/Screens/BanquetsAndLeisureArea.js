import React from 'react'
import Footer from "../Components/Footer/Footer";
import Navbar from '../Components/Navbar'
import Title from "../Components/Title"
import BanquetLeisure from '../Components/BanquetLeisure';

function BanquetsAndLeisureArea() {
  return (
    <div>
        <div className='banquetsandleisurearea'>
            <Navbar/>
            <Title name="Our Banquets and Leisure Area" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
        </div>
        <BanquetLeisure/>
        <Footer/>
    </div>
  )
}

export default BanquetsAndLeisureArea
