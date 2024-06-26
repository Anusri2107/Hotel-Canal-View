import React from 'react'
import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import Policy from '../Components/Policy'
import Footer from '../Components/Footer/Footer'

function Policies() {
  return (
    <div>
      <div className='policies'>
        <Navbar/>
        <Title name="Our Policies" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim cupiditate ratione eum veniam deleniti illo saepe voluptatibus ducimus dolor?"/>
      </div>
      <Policy/>
      <Footer/>
    </div>
  )
}

export default Policies
