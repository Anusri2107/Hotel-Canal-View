import React, { useRef } from 'react'
import useIsVisible from '../../effects/useIsVisible';
import Card from './Card';
import { MdOutlineDining } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";

function Services() {

    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

  return (
    <div  className='flex flex-col-reverse gap-5 space-x-2 xl:gap-0 xl:flex-row items-center justify-center xl:justify-between px-5 py-3 mt-10 xl:px-20 xl:py-5'>
      <div ref={ref1} className={`flex flex-col justify-center xl:w-1/2 text-center xl:text-left xl:space-y-5 transition-all ease-in-out duration-1000 ${isVisible1 ? "translate-none opacity-100" : "translate-y-full opacity-0"}`}>
        <h1 className='text-4xl font-face-gr-bold uppercase'>Our Services</h1>
        <p className='font-face-gr'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores possimus ab nulla! Voluptates accusantium possimus, unde corporis doloremque sapiente enim nam voluptatem suscipit perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores possimus ab nulla! Voluptates accusantium possimus, unde corporis doloremque sapiente enim nam voluptatem suscipit perspiciatis!
        </p>
      </div>
      <div ref={ref1} className={`flex flex-wrap flex-col xl:flex-row items-center justify-center gap-6 w-full xl:w-1/2 transition-all ease-in-out duration-1000 ${isVisible1 ? "xl:-translate-y-0 opacity-100" : "xl:-translate-y-10 opacity-0"}`}>
      <Card service={<MdOutlineDining/>}/>
      <Card service={<MdOutlineBedroomParent/>}/>
      <Card service={<MdOutlineDining/>}/>
      <Card service={<MdOutlineBedroomParent/>}/>
      </div>
    </div>
  )
}

export default Services
