import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import Message from "./Message";

function Contact() {
  
  return (
    <div className="px-5 py-3 xl:px-20 xl:py-5 mx-auto my-10">
      <div className="flex flex-col xl:flex-row justify-around gap-5">
        <div>
          <div>
            <h1 className="text-lg font-face-gr-bold">CONTACT INFORMATION</h1>
            <div className="p-5 flex flex-col gap-2 font-face-ta">
              <div className="flex items-center justify-start space-x-2 h-[100px] w-full xl:w-[400px] bg-[color:var(--color2)] px-6">
                <IoLocationSharp className="text-xl" />
                <p>XYZ</p>
              </div>
              <div className="flex items-center justify-start space-x-2 h-[100px] w-full xl:w-[400px] bg-[color:var(--color2)] px-6">
                <IoIosPhonePortrait className="text-xl" />
                <p>+91-999-999-9999</p>
              </div>
              <div className="flex items-center justify-start space-x-2 h-[100px] w-full xl:w-[400px] bg-[color:var(--color2)] px-6">
                <MdOutlineMail className="text-xl" />
                <p>hotelcanalview@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Message/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
