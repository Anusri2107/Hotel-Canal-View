import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <nav
        className={`w-full flex items-center justify-between h-24 px-5 py-3 lg:px-10 xl:px-20 xl:py-5 text-[color:var(--color1)] ${
          sticky
            ? "fixed text-[color:var(--color1)] bg-[color:var(--color2)] shadow-xl transition-all duration-700 z-50 ease-in-out w-full"
            : "text-white"
        }`}
      >
        <div className="text-5xl font-bold cursor-pointer">LOGO</div>
        <div>
          <ul
            ref={navRef}
            className="font-face-gr xl:flex xl:flex-row xl:gap-9 py-20 md:py-0 px-5 xl:px-5 xl:items-center xl:justify-center text-base font-semibold w-full"
          >
            <NavLink
              to="/"
              className="relative hover:text-[color:var(--color4)] after:bg-[color:var(--color4)] after:absolute after:h-1 after:w-0 after:top-9 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="relative hover:text-[color:var(--color4)] after:bg-[color:var(--color4)] after:absolute after:h-1 after:w-0 after:top-9 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              About
            </NavLink>
            <NavLink
              to="/rooms"
              className="relative hover:text-[color:var(--color4)] after:bg-[color:var(--color4)] after:absolute after:h-1 after:w-0 after:top-9 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Rooms
            </NavLink>
            <NavLink
              to="/services&facilities"
              className="relative hover:text-[color:var(--color4)] after:bg-[color:var(--color4)] after:absolute after:h-1 after:w-0 after:top-9 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Services & Facility
            </NavLink>
            <NavLink
              to="/restaurant&bar"
              className="relative hover:text-[color:var(--color4)] after:bg-[color:var(--color4)] after:absolute after:h-1 after:w-0 after:top-9 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Restaurant & Bar
            </NavLink>
            <NavLink
              to="/banquets&leisurearea"
              className="relative hover:text-[color:var(--color4)] after:bg-[color:var(--color4)] after:absolute after:h-1 after:w-0 after:top-9 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Banquets & Leisure Area
            </NavLink>
            <NavLink
              to="/contactus"
              className="relative hover:text-[color:var(--color4)] after:bg-[color:var(--color4)] after:absolute after:h-1 after:w-0 after:top-9 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Contact Us
            </NavLink>

            <button onClick={showNavbar} class="nav-btn nav-close-btn">
              <FaTimes />
            </button>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-2">
          <button
            className={`font-face-ta invisible xl:visible text-2xl font-semibold px-4 py-5 xl:px-4 xl:py-5 text-[color:var(--color2)] hover:bg-[color:var(--color2)] hover:ring-2 hover:ring-[color:var(--color4)] focus:ring-4 focus:ring-[color:var(--color4)] hover:text-[color:var(--color4)] hover:text-2xl  transition-all duration-300 ease-in-out focus:text-[color:var(--color4)] focus:bg-[color:var(--color2)] ${
              sticky ? "bg-[color:var(--color1)]" : "bg-[color:var(--color4)]"
            }`}
          >
            Book Now
          </button>
          <button onClick={showNavbar} class={`nav-btn nav-btn-open ${sticky ?"text-[color:var(--color1)]":"text-[color:var(--color5)]"}`}>
            <FaBars />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
