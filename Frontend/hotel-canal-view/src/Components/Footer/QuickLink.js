import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function QuickLink({name,path}) {
  return (
    <div className='flex items-center space-x-2 border-b-2 h-10 py-5 hover:border-b-[color:var(--color1)] duration-300 transition-all hover:text-[color:var(--color1)]'>
            <IoMdArrowDropright/>
            <NavLink to={path} style={({isActive}) =>{ return isActive ? {color: "var(--color1)"}:{};}} className="font-face-gr">{name}</NavLink>
    </div>
  )
}

export default QuickLink
