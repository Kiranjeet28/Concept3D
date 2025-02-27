import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/Aboutus'
import Project from './sections/Project'
import Footer from './sections/Footer'
import WorkExperience from './sections/Experience'
import Contact from './sections/Contact'
import Clients from './sections/Clients'
import { MinorProject } from './sections/MinorProject'

function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero/>
      <About/>
      <Project/>
      <MinorProject/>
      <WorkExperience/>
      <Clients/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App