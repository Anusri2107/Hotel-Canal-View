import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaSquareFacebook, FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Reach() {
  return (
    <div>
      <h3 className=' uppercase font-semibold font-face-gr'>Reach Us!</h3>
      <div className='my-5 flex flex-col gap-2 font-face-gr'>
        <div className='flex items-center justify-start space-x-2'>
            <IoLocationSharp className='text-xl'/>
            <p>XYZ</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
            <IoIosPhonePortrait className='text-xl'/>
            <p>+91-999-999-9999</p>
        </div>
        <div className='flex items-center justify-start space-x-2'>
            <MdOutlineMail className='text-xl'/>
            <p>hotelcanalview@gmail.com</p>
        </div>
        <div className='flex gap-8 cursor-pointer text-3xl items-center my-5'>
            <FaWhatsapp className='duration-500 hover:text-[color:var(--color1)] hover:-translate-y-1'/>
            <FaSquareFacebook className='duration-500 hover:text-[color:var(--color1)] hover:-translate-y-1'/>
            <FaInstagram className='duration-500 hover:text-[color:var(--color1)] hover:-translate-y-1'/>
            <FaXTwitter className='duration-500 hover:text-[color:var(--color1)] hover:-translate-y-1'/>
        </div>
      </div>
    </div>
  )
}

export default Reach
