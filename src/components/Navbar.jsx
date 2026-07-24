import React, { useEffect, useRef, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
const Navbar = ({activeSection}) => {

  console.log(activeSection)

  const setActiveStyle = (section)=>{
    if(activeSection == section){
      return " text-xl relative after:absolute after:bottom-[-10px] hover:text-[#00E5FF] after:left-0 after:h-[2px]  after:bg-[#00E5FF] after:transition-all after:duration-300 after:w-full text-[#00E5FF] "
    }
    else return "relative text-xl hover:text-[#00E5FF]"
  }

  const navElements = [
    {
      element: "home",
      reference: "home"
    },
    {
      element : "about",
      reference : "about"
    },
    {
      element: "skills",
      reference: "skills"
    }, 
    // {
    //   element: "projects",
    //   reference: "projects"
    // }, 
    {
      element: "achievements",
      reference: "achievements"
    }, {
      element: "contact",
      reference: "contact"
    },]

  return (
    <nav id='NavBar' className=' sticky top-0 z-50 backdrop-blur-md flex bg-black/80 border-b border-white/10 shadow-[0_10px_30px_rgb(0,0,0,0.1)] '>
      <div id='navContainer' className=' w-full max-w-7xl capitalize text-s font-bold h-18 flex justify-between mx-auto items-center'>
        <div id='logo'>
          <a href="#home"><img src={logo} alt="logo downloading..." className='w-20 h-20 '  /></a>
        </div>
        <div id="NavEle" className='flex gap-16'>
            {/* <Link smooth to="/#contact">Features</Link> */}
          {
            navElements.map((element, i) => {
              return (
                <a href={"#"+ element.reference} key={element.reference}
                  className={setActiveStyle(element.reference)}
                >{element.element}</a>
              )
            })
          }
        </div>
        <div id="iconDiv">
          <button className='cursor-pointer' onClick={() => console.log("dark mode off")}>
            <FaMoon color='gold' className='bg-none hover:drop-shadow-[10px_10px_15px_rgba(234,255,8,0.9)]' />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
