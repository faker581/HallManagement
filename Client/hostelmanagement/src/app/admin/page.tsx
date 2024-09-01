import AdminComplaintCenter from '@/components/admin/admincomplaintcenter/Admincomplaint'
import AdminDashboard from '@/components/admin/admindash/AdminDashboard'
import Footer from '@/components/footer/Footer'
import Navbar2 from '@/components/navbar/Navbar2'
import RoomManager from '@/components/roommanager/RoomManager'
import React from 'react'

export default function AdminPortal() {
  return (
    <>
    <Navbar2/>
    <AdminDashboard/>
    <RoomManager/>
    <AdminComplaintCenter/>
    <Footer/>
    </>
  )
}
