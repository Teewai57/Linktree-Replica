import React from 'react'
import { Link } from 'react-router-dom'
import LinkSection from '../../Components/Links/LinkSection'
import Footer from '../../Components/Footer/Footer'
import Profile from '../../Components/Profile Section/Profile'
import Socials from '../../Components/Socials/Socials'

const Home = () => {
  return (
    <div>
        <div className='max-w-5xl mx-auto items-center text-center'>
      <Profile />
      <LinkSection />
      <Socials />
      
    </div>
      <Footer />
    </div>
  )
}

export default Home