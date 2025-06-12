import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import BeginnerCourse from './pages/BeginnerCourse'
import IntermediateCourse from './pages/IntermediateCourse'
import AdvancedCourse from './pages/AdvancedCourse'
import Tips from './pages/Tips'
import FAQ from './pages/FAQ'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/beginner" element={<BeginnerCourse />} />
        <Route path="/courses/intermediate" element={<IntermediateCourse />} />
        <Route path="/courses/advanced" element={<AdvancedCourse />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Layout>
  )
}

export default App
