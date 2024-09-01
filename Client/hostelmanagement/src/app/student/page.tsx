
import ComplaintStudent from '@/components/complaintstudent/ComplaintStu'
import Footer from '@/components/footer/Footer'
import Navbar1 from '@/components/navbar/Navbar2'
import StudentDash from '@/components/studentdashboard/studentdash'
import React from 'react'

export default function StudentPortal() {
  return (
    <>
    <Navbar1/>
    <StudentDash/>
    <ComplaintStudent/>
    <Footer/>
    </>
  )
}
