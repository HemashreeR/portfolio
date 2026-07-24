import React from 'react'
import { FaEnvelope, FaGithub, FaLocationArrow, FaMapMarkedAlt, FaPaperPlane, FaPhone } from 'react-icons/fa'
import { LuLinkedin } from 'react-icons/lu'
import Button from './Button'

const Contact = ({sectionRef}) => {

  const inputStyle = "border w-100 h-13 rounded text-s px-2 border-blue-950/60 focus:border-blue-500 outline-0 bg-blue-900/10"

  const details = [
    {
      icon : <FaEnvelope/>,
      title : "Email",
      info : "hemashree519@gmail.com"
    },
    {
      icon : <FaPhone/>,
      title : "Contact",
      info : "7760450382"
    },
    {
      icon : <FaMapMarkedAlt/>,
      title : "Location",
      info : "Bengaluru"
    },
    {
      icon : <LuLinkedin/>,
      title : "LinkedIn",
      info : "www.linkedin.com/in/hemashree-r-2026-grad/"
    },{
      icon : <FaGithub />,
      title : "github",
      info : "https://github.com/HemashreeR"
    }
  ]

  return (
    <section ref={sectionRef} id='contact' className='w-full h-96 flex flex-col gap-10'>
      <div id='headingDiv' className='text-3xl font-bold flex gap-3 items-center justify-center'>
        <FaEnvelope color='lightblue'/>
        <h1 className='border-b-4 border-blue-500 py-3 w-fit'>Contact Me</h1>
      </div>
      <div id='mainDiv' className=' w-full flex gap-16 items-center justify-center flex-wrap px-2 py-2'>
        <div id="left" className=' flex flex-col gap-6 w-1/3 h-full  bg-blue-900/10 shadow-[0_0_10px_rgba(0,0,255,0.3)] rounded-xl px-2 py-6'>
          {
            details.map((detail,i)=>{
              return(
                <div key={i} className='flex items-center justify-start gap-8 px-7 py-2'>
                  <div className='text-blue-700 text-3xl drop-shadow-[0_0px_5px_darkblue]'>
                    {detail.icon}
                  </div>
                  <div className='flex flex-col gap-1.5 '>
                    <h1 className='text-xl font-bold text-blue-400 capitalize'>{detail.title}</h1>
                    <h2>{detail.info}</h2>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div id="right" className='w-1/3 border-blue h-full flex flex-col items-center  px-9 py-8 bg-blue-900/10 shadow-[0_0_10px_rgba(0,0,255,0.3)] rounded-xl'>
          <form action="" className='flex flex-col gap-5'>
            <input type="text" name="name" id="name" placeholder='Your Name' className={inputStyle}/>
            <input type="email" name="email" id="email" placeholder='Your Email' className={inputStyle}/>
            <input type="text" name="subject" id="subject" placeholder='Subject' className={inputStyle} />
            <textarea name="message" id="message" placeholder='Your Message' className={inputStyle} style={{height : "200px" , padding : "10px"}} ></textarea>
            <Button content={"Send Message"} color={"blue"}/>
          </form>
        </div>

      </div>

    </section>
  )
}

export default Contact
