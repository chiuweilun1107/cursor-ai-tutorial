import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import LessonViewer from './pages/LessonViewer'
import MCPCourse from './pages/MCPCourse'
import UnderDevelopment from './pages/UnderDevelopment'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/mcp" element={<MCPCourse />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/learn/:courseId/:lessonId" element={<LessonViewer />} />
        <Route path="/under-development/:id" element={<UnderDevelopment />} />
      </Routes>
    </Layout>
  )
}

export default App
