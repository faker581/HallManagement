import About from '@/components/about/page'
import ContactForm from '@/components/contact/contact'
import Footer from '@/components/footer/Footer'
import Navbar1 from '@/components/navbar/Navbar1'
import React from 'react'
export default function Home() {
  return (
    <>
    <Navbar1/>
    <About/>
    <ContactForm/>
    <Footer/>
    </>
  )
}
