import React from 'react'
import Home from './home/Home'

import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Contact from './components/Contact'
import About from './components/About'
import Signup from './components/Signup'



const App = () => {
  return (
    <>
  
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/course" element={<Courses/>}/>
<Route path="/contact" element={<Contact/> }/>
<Route path="/about" element={<About/> }/>
<Route path="/signup" element={<Signup/>}/>


   </Routes>
    </>
  )
}

export default App
