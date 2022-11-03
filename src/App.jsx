import React from 'react'
import Contact from './Components/Contact Form/Contact'
import Footer from './Components/Footer/Footer'
import Link from './Components/Links/Link'
import Profile from './Components/Profile Section/Profile'
import Socials from './Components/Socials/Socials'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className='max-w-5xl mx-auto items-center text-center'>
      <Profile />
      <Link />
      <Socials />
      
    </div>
      <Footer />
    </>
  )
}

export default App
