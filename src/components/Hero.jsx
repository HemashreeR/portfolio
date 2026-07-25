import React, { Fragment } from 'react'
import Hema from '../assets/hema.png'
import bgImg from '../assets/bg.png'
import bgImg2 from '../assets/bg2.png'
import bgImg3 from '../assets/bg3.png'
import Button from './Button'
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'
import { SiLeetcode, SiExpress, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si'
import { LuAArrowDown, LuArrowDown } from 'react-icons/lu'
import resume from '../assets/resume.pdf'

const Hero = ({sectionRef}) => {

  const icons = [
  {
    logo : <FaEnvelope size={24} color='white' />,
    ref : "#contact"
  },
  {
    logo : <FaGithub size={24} color='white' />,
    ref : "https://github.com/HemashreeR"
  },
  {
    logo : <FaInstagram size={24} color='white' />,
    ref : "https://www.instagram.com/hemashreeeeee/"
  },
  {
    logo : <FaLinkedin size={24} color='white' />,
    ref : "https://www.linkedin.com/in/hemashree-r-2026-grad/"
  },
  {
    logo : <SiLeetcode size={24} color='white' />,
    ref : "https://leetcode.com/u/Hemashree__R/"
  }
]

  const techStack = [
    {
      tech: <FaReact size={34} color='blue' />,
      techName: "React"
    },
    {
      tech: <FaHtml5 size={34} color='rgba(194, 65, 12, 1)' />,
      techName: "HTML"
    },
    {
      tech: <FaCss3 size={34} color='yellow' />,
      techName: "CSS"
    },

    {
      tech: <FaNodeJs size={34} color='green' />,
      techName: "NodeJs"
    },

    {
      tech: <SiExpress size={34} />,
      techName: "Express"
    },
    {
      tech: <SiMongodb size={34} color='green' />,
      techName: "Mongodb"
    },
    {
      tech: <SiMysql size={40} color='blue' />,
      techName: "MySQL"
    },
    {
      tech: <SiTailwindcss size={34} color='#00E5FF' />,
      techName: "Tailwind CSS"
    },
    {
      tech: <FaGithub size={34} />,
      techName: "Github"
    }]
  return (
    <section ref={sectionRef} id='home'
      className='relative w-full min-h-screen flex flex-col justify-around items-center'
    >
      {/* <div style={{ backgroundImage: `url(${bgImg3})` }}
        className='absolute inset-y-2 opacity-10 max-w-screen-2xl w-full bg-cover'
      >
      </div> */}
      <div className='max-w-7xl relative z-5 flex w-screen h-full justify-center'>
        <div id="leftPart" className='flex flex-col gap-3 w-1/2'>
          <h3 className='text-3xl font-bold'>Hi, I'm</h3>
          <h1 className='text-7xl font-bold'>Hemashree <span className='text-[#3B82F6]'>R</span></h1>
          <h2 className=' text-3xl font-semibold text-[#3B82F6]'>Frontend Developer</h2>
          <h2 className='text-2xl '>React Developer | MERN Stack Developer</h2>
          <p className='text-xl max-w-lg leading-8'>Passionate about building responsive,<br />
            user-friendly, and scalable web
            applications using modern technologies.</p>
          <div id="btnSection" className='flex gap-5 mt-2 w-1/2'>
          <a href={resume} download={"Hemashree_R.pdf"}>
            <Button content={"Downlaod Resume"} color={"blue"}/>
          </a>
          <a href="#contact">
            <Button content={"Contact me"} color={"dark-blue"} />
          </a>
          </div>
          <div id="icons" className='flex mt-2 w-1/2 justify-between'>
            {
              icons.map((icon, i) => {
                return (
                    <a href={icon.ref} target='_blank'>
                  <div className='py-3 px-3 w-fit rounded-full bg-[rgba(0, 0, 128, 0.3)] shadow-[0_0_5px_rgba(0,100,255,0.5)] cursor-pointer hover:bg-[#3B82F6]' key={i}>
                      {icon.logo}
                  </div>
                    </a> 
                )
              })
            }
          </div>
        </div>
        <div id="rightPart">
          <div className='w-80 h-80 rounded-full z-0 absolute shadow-[3px_0px_20px_rgba(59,130,246,0.5),inset_3px_10px_20px_rgba(59,130,246,0.5)] right-43'>
          </div>
          <img src={Hema} alt="pic loading..." className='w-90 h-120 -top-7 relative z-1 ' />
        </div>
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-5'>
        <h1 className='text-xl text-[#00E5FF] capitalize font-semibold'>Tech i work with </h1>
        <div id="techStack" className='  flex w-full justify-center gap-13 h-20 items-center'>
          {
            techStack.map((t, i) => {
              return (
                <div key={i} className='flex flex-col items-center text-xs gap-2 font-semibold'>
                  <div className='bg-black  rounded px-3 py-3 shadow-[0_0_1px_rgba(0,0,255,1)]'>
                    {t.tech}
                  </div>
                  {t.techName}
                </div>
              )
            })
          }
        </div>
        {/* <div id="scrollDownDiv" className='text-xl flex gap-2'>
          <h1 className='text-2xl font-bold text-blue-300 '>Scrol down</h1>
          <div className='text-blue-300 font-extrabold text-4xl'>
          <LuArrowDown/>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero
