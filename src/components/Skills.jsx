import React from 'react'
import { FaBook, FaCss3, FaGit, FaGithub, FaGitlab, FaGitSquare, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiPostman, SiTailwindcss, SiVsco } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const Skills = ({sectionRef}) => {

  const skillsData = [
    {
      category: "Frontend",
      list: [
        {
          skill: "React",
          logo: <FaReact color='#61DAFB' />
        },
        {
          skill: "JavaScript",
          logo: <SiJavascript color='#F7DF1E' />
        },
        {
          skill: "HTML",
          logo: <FaHtml5 color='#E34F26' />
        },
        {
          skill: "CSS",
          logo: <FaCss3 color='yellow' />
        }, {
          skill: "Tailwind",
          logo: <SiTailwindcss color='#38BDF8' />
        }
      ]
    },
    {
      category: "Backend",
      list: [
        {
          skill: "Node",
          logo: <FaNodeJs color='#339933' />
        },
        {
          skill: "Express",
          logo: <SiExpress />
        },
        {
          skill: "MongoDB",
          logo: <SiMongodb color='#47A248' />
        },
        {
          skill: "Firebase",
          logo: <SiFirebase color='orange' />
        }
      ]
    },
    {
      category: "Programming & Tools",
      list: [
        {
          skill: "Git",
          logo: <FaGitSquare color='rgb(241, 79, 47)' />
        },
        {
          skill: "GitHub",
          logo: <FaGithub />
        },
        {
          skill: "VS Code",
          logo: <VscCode color='blue' />
        },
        {
          skill: "Postman",
          logo: <SiPostman color='rgb(255, 108, 55)' />
        }
      ]
    }
  ]
  return (
    <section ref={sectionRef} id='skills' className='w-full items-center'>
      <div className='w-full flex flex-col justify-center items-center '>
        <div id='headingDiv' className='w-full flex gap-2 items-center justify-center font-bold text-3xl' >
          <div className='text-blue-300'>
            <FaBook />
          </div>
          <h1 className='border-b-4 border-blue-500 py-2'>My Skills</h1>
        </div>
        <h3 className='text-xl mt-3'>Technologies and tools I use to build modern web applications.</h3>
        <div className='w-5xl flex flex-col gap-10 it mt-10'>
          {
            skillsData.map((s, i) => {
              return (
                <div className='flex  flex-col rounded-xl w-full h-44 items-start px-6 py-4 justify-around bg-black/20 shadow-[0_0_8px_rgba(0,0,255,0.9)]' key={i}>
                  <h1 className='text-2xl font-bold text-blue-400'>{s.category}</h1>
                  <div className='flex  justify-evenly  w-full'>
                    {
                      s.list.map((l, i) => {
                        return (
                          <div className='flex bg-black w-23 h-20 border-2 border-blue-400 flex-col items-center justify-center gap-1 px-1 py-1 rounded-2xl shadow-[0_0_10px_rgba(0,0,255,0.7)] hover:transform-y-2 hover:shadow-[0_0_10px_rgba(0,180,255,1)] cursor-pointer' key={i}>
                            <div className='text-3xl'>
                              {l.logo}
                            </div>
                            <h2>{l.skill}</h2>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
