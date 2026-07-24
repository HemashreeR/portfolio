import React from 'react'
import { FaClock, FaCode, FaHandPaper, FaHtml5, FaNewspaper, FaPaperPlane, FaStar, FaTag, FaTrophy } from 'react-icons/fa'
import { LuTag } from 'react-icons/lu'
import { SiElement, SiLeetcode, SiTga } from 'react-icons/si'

const Acheviements = ({sectionRef}) => {

  const icons = [
    {
      icon: <FaTrophy color='gold' />,
      heading: "Best Presentation Award - NCASTEM-2025",
      desc: "Received Best presentation award for presenting Project idea at NCASTEM-2025"
    },
    {
      icon: <FaNewspaper color='white' />,
      heading: "Research Paper presentation",
      desc: "Presented Paper at National Level Conference"
    },
    {
      icon: <FaCode  color='orange'/>,
      heading: "50-Days Leetcode Streak",
      desc: "Got Leetcode 50 Days badge for solving DSA Problems consistently"
    },
    {
      icon: <FaStar color='lightgreen'/>,
      heading: "DSA Problem Solving",
      desc: "Solved 100+ problems in Leetcode"
    }
  ]

  return (
    <section ref={sectionRef} className='flex flex-col items-center gap-10' id='achievements'>
      <div className='flex items-center justify-center gap-3 text-3xl font-bold'>
        <FaClock color='lightblue' />
        <h1 className='border-b-4 border-blue-500 py-3'>Achievements</h1>
      </div>
      <div className='w-6xl flex flex-col justify-center gap-10'>
        {
          icons.map((icon, i) => {
            return (
              <div className='flex items-center gap-16 border border-blue-400 shadow-[0_0_10px_rgba(0,0,255,0.9)] px-6 py-7' key={i}>
                <div className=' text-7xl text-blue-600  drop-shadow-[0_0_2px_rgba(255,255,255,0.6)] opacity-70 bg-none w-30 h-30  flex justify-center items-center border rounded-xl'>
                  {icon.icon}
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-2xl text-blue-400'>{icon.heading}</h1>
                  <p className='text-lg'>{icon.desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Acheviements
