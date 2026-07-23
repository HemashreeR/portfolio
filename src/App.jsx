import React from 'react'
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
  return (
    <div className = "portfolio-bg">  
      <Navbar />
      <div className='flex flex-col gap-16 items-center'>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Acheviements/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
