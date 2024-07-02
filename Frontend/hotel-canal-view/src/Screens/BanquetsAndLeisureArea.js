import React from 'react'
import Footer from "../Components/Footer/Footer";
import Title from "../Components/Title"
import BanquetLeisure from '../Components/Banquets&LeisureArea/BanquetLeisure';
import Navbar from '../Components/Navbar/Navbar';
import ScrollButton from '../Components/ScrollButton';

function BanquetsAndLeisureArea() {
  return (
    <div>
        <div className='banquetsandleisurearea'>
            <Navbar/>
            <Title name="Our Banquets and Leisure Area" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
        </div>
        <BanquetLeisure/>
        <ScrollButton/>
        <Footer/>
    </div>
  )
}

export default BanquetsAndLeisureArea
