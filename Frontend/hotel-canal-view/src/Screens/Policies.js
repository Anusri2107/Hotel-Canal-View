import React from 'react'
import Title from '../Components/Title'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Policy from '../Components/Policy/Policy'
import ScrollButton from '../Components/ScrollButton'

function Policies() {
  return (
    <div>
      <div className='policies'>
        <Navbar/>
        <Title name="Our Policies" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
      </div>
      <Policy/>
      <ScrollButton/>
      <Footer/>
    </div>
  )
}

export default Policies
