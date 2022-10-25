import React from 'react'
import Footer from './Components/Footer/Footer'
import Link from './Components/Links/Link'
import Profile from './Components/Profile Section/Profile'
import Socials from './Components/Socials/Socials'

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
