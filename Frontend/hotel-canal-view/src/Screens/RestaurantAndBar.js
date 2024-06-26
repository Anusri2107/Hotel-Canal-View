import React from 'react'
import Footer from "../Components/Footer/Footer";
import Title from '../Components/Title';
import RestaurantBar from '../Components/Restaurant&Bar/RestaurantBar';
import Navbar from '../Components/Navbar/Navbar';

function RestaurantAndBar() {
  return (
    <div>
        <div className='restaurantandbar'>
            <Navbar/>
            <Title name="Our Restaurant and Bar" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
        </div>
        <RestaurantBar/>
        <Footer/>
    </div>
  )
}

export default RestaurantAndBar
