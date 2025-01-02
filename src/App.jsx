
import React from 'react'
import Header from './components/header'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import ProjectDetail from './components/Projectdetail'
import ProjectsPage from './components/Projects'
import Portfolio from './components/Aboutus'
import ContactUs from './components/Contactus'




const App = () => {
  return (
   <>
      <Header />
  
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projectdetail/:project" element={<ProjectDetail/>} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/aboutme" element={<Portfolio />} />
    <Route path="/contactme" element={<ContactUs />} />



    
   </Routes>
   </>
  )
}

export default App