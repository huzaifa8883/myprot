
import React from 'react'
import { Routes,Route,Switch } from 'react-router-dom'
import Home from './components/Home'
import ProjectDetail from './components/Projectdetail'
import ProjectsPage from './components/Projects'
import Portfolio from './components/Aboutus'
import ContactUs from './components/Contactus'
import Headerr from './components/Headerr'

import Footer from './components/Footer'



const App = () => {
  return (
   <>
      <Headerr />
      <Routes>
      <Switch>

    <Route path="/" element={<Home />} />
    <Route path="/projectdetail/:project" element={<ProjectDetail/>} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/aboutme" element={<Portfolio />} />
    <Route path="/contactme" element={<ContactUs />} />


    </Switch>
    
   </Routes>
   <Footer/>
   </>
  )
}

export default App
