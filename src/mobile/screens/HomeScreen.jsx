import React from 'react'
import About from './home components/About'
import Contact from './home components/Contact'
import Intro from './home components/Intro'
import Services from './home components/Services'
import Staff from './home components/Staff'
import Team from './home components/Team'

const HomeScreen = () => {
  return (
    <>
    <Intro/>
    <About/>
    <Services/>
    {/* <Team/> */}
    <Contact/>
    </>
  )
}

export default HomeScreen