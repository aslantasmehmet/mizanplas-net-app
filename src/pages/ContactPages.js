import React from 'react'
import Navbar from '../component/Navbar'
import Search from '../component/Search'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

export default function ContactPages() {
  return (
    <div>
        <Navbar/>
        <Search/>
      
       <div className=' border container w-full h-full mx-auto shadow-xl rounded py-4 mb-16'><Contact /></div> 
       <Footer/>
    </div>
  )
}
