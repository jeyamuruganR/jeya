import { useState } from 'react'
import About from './pages/About'
import './cssfiles/About_style.css'
import './cssfiles/style.css'

import Skills from './pages/Skills'
import "./cssfiles/Skills_style.css"

import Project from './pages/Project'
import './cssfiles/Project_style.css'


import Eduction from './pages/Eduction'

import './cssfiles/Eduction_style.css'


import Contect from './pages/Contect'

import './cssfiles/Contect_style.css'

import Home from './pages/Home'

import './cssfiles/Home_style.css'

import Navication from './pages/Navication'

import './cssfiles/Navication_style.css'




function App() {


  return (
    <>
    {/* Nevication section */}
    <Navication/>
    {/* Home section */}
    <Home/>
    {/* About section */}
    <About/>
    {/* Projext section */}
    <Project/>
    {/* Skill Section */}
    <Skills/>
    {/* Eduction Section */}
    <Eduction/>
    {/* Contect Section */}
    <Contect/>

    </>
  )
}

export default App
