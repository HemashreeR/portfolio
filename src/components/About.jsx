import React, { Fragment } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { LuUserRound } from 'react-icons/lu'


const About = () => {

  const cardData = [
    {
      title: "Education",
      details: ["B.E. Computer Science & Engineering",
        "AMC Engineering College",
        "CGPA: 8.47"]
    },
    {
      title: "Projects",
      details: ["AI Clothing Customization Platform (Swaastra)",
        "Student Management System",
        "Employee Leave Management System"]
    },
    {
      title: "Achievements",
      details: ["Best Performance Award - NCASTEM 2025"
        , "Research Paper Presentation - NCASTEM 2025",
        "Active LeetCode Problem Solver"]
    },
    {
      title: "Career Goal",
      details: ["To build scalable, user-centric web applications while growing into a skilled Full-Stack Software Engineer."]
    }
  ]

  return (
    <section className='w-full flex flex-col' id='about'>
      <div id='aboutDiv' className='flex flex-col items-center justify-center gap-6' >
        <div id='HeadingDiv ' className='flex items-center justify-center gap-3'>
          <span className='text-blue-300'>
            <LuUserRound size={34} />
          </span>
          <h1 className='text-3xl font-bold border-b-4 py-2 border-blue-500'>About me</h1>
        </div>
        <div id='infoDiv' className='w-6xl text-lg whitespace-pre-wrap  text-justify '>
          <p className='flex flex-col gap-6 mt-5'>
            <span>    I'm Hemashree R, a passionate Frontend Developer and final-year Computer Science Engineering student who enjoys building modern, responsive, and user-friendly web applications.</span>
            <span>
              My primary expertise is in React.js, JavaScript, Tailwind CSS, and the MERN Stack. I enjoy creating clean, reusable, and scalable applications while continuously learning new technologies and best development practices.
            </span>
            <span>
              I've built multiple projects ranging from full-stack web applications to AI-powered solutions, giving me hands-on experience with React, Node.js, Express.js, MongoDB, Firebase, and REST APIs. I believe in writing maintainable code, solving real-world problems, and continuously improving my skills as a developer.
            </span>
            <span>
              Currently, I'm looking for opportunities where I can contribute to meaningful projects, collaborate with experienced developers, and grow as a Frontend/React Developer.
            </span>
          </p>
        </div>

        <div className='w-5xl min-h-45 grid grid-cols-2 gap-16 items-center justify-center px-3 py-3 mt-10 '>
          {
            cardData.map((ele, i) => {
              return (
                <div key={i} className='w-s min-h-55 px-4 py-4 flex flex-col items-baseline gap-2 rounded-xl bg-black/30 shadow-[0_0_6px_rgba(0,0,255,0.9)] transition-all duration-300 hover:-transalte-y-2 hover:shadow-[0_0_18px_rgba(59,130,246,0.8)]'>
                  <h1 className='text-2xl font-bold text-[#00E5FF]'>{ele.title}</h1>
                  {
                    ele.details.map((detail, i) => {
                      return (
                        <div className='flex gap-3' key={i}>
                          <div className="text-xs font-bold relative top-2">
                            <FaCheckCircle />
                          </div>
                          <h2 className='text-lg'>{detail}</h2>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default About
