import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
// import './assets/HemashreeR.png'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Acheviements from './components/Acheviements'
import Contact from './components/Contact'
import bgImg3 from './assets/bg3.png'


const App = () => {
  
  const refer = useRef([])
  const [activeSection, setactiveSection] = useState(null)

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting)
          setactiveSection(entry.target.id)
      })
    },{threshold : 0.5})
    refer.current.forEach((r)=>{
      observer.observe(r)
    })
    return () =>{
      observer.disconnect()
    }
  },[])

  return (
    <div className = "">  
      <Navbar activeSection={activeSection} className = "nav" />
      <div className='flex flex-col gap-16 items-center'>
      <Hero sectionRef = {(element)=> refer.current[0] = element} />
      <About sectionRef = {(element)=> refer.current[1] = element} />
      <Skills sectionRef = {(element)=> refer.current[2] = element}/>
      <Projects sectionRef = {(element)=> refer.current[3] = element}/>
      <Acheviements sectionRef = {(element)=> refer.current[4] = element}/>
      <Contact sectionRef = {(element)=> refer.current[5] = element}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
