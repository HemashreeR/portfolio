import React, { Fragment } from 'react'
import { FaCopyright, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  const icons = [<FaGithub />,
  <FaLinkedin />,
  <SiLeetcode />,
  <FaEnvelope />]

  const links = [
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
    }, {
      element: "projects",
      reference: "projects"
    }, {
      element: "achievements",
      reference: "achievements"
    }, {
      element: "contact",
      reference: "contact"
    },]

    const techStack = [
      "React",
      "mongoDB",
      "Node.js",
      "Javascript",
      "Tailwind.CSS"
    ]

  return (
    <footer id='footer' className='w-full h-90 relative mt-100 bottom-0 flex flex-col bg-black py-7 justify-between gap-15 shadow-[0_0_10px_rgba(0,0,255,0.2)]'>
      <div className='flex items-center justify-around'>
        <div id="left" className='min-w-1/4 flex flex-col justify-center h-40 px-10 gap-2'>
          <h1 className='text-5xl font-bold'>Hemashree <span className='text-blue-400'>R</span></h1>
          <p className='text-lg'>Building modern web applications with passion and creativity</p>
          <div className='flex gap-5 list-none'>
            {
              icons.map((icon,i)=>{
                return(
                  <li key={i} className='text-3xl hover:text-blue-200 hover:shadow-[0_0_10px_rgba(0,0,255,0.5)] cursor-pointer'>{icon}</li>
                )
              })
            }
          </div>
        </div>
        <div id='mid' className='flex flex-col gap-2'>
          <h1 className='text-xl font-semibold'>Quick Links</h1>
          <div className='flex flex-col gap-2 items-start'>
          {
            links.map((link,i)=>{
              return(
                <a href={`#${link.reference}`}>
                <li key={i} className='list-none text-s opacity-50 hover:text-blue-400 hover:opacity-100 hover:border-blue-400 hover:border-b w-fit cursor-pointer '>{link.element}</li>
                </a>
              )
            })
          }
          </div>
        </div>
        <div id='right' className='flex flex-col gap-2'>
          <h1 className='text-xl font-semibold'>Tech Stack</h1>
          <div className='flex flex-col gap-2 '>
          {
            techStack.map((tech,i)=>{
              return(
                <li key={i} className='list-none text-s opacity-50 hover:text-blue-400 hover:opacity-100 hover:border-blue-400 hover:border-b w-fit cursor-pointer'>{tech}</li>
              )
            })
          }
          </div>
        </div>
      </div>
      <div className='h-30 py-3 text-s gap-4 opacity-70  shadow-[0_0_10px_rgba(0,0,255,0.4)] flex items-center justify-center'>
        <FaCopyright/>
        <p>2026 Hemashree R • Built with React & Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer
