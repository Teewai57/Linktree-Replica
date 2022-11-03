import React from 'react'
import Contact from './pages/Contact/Contact'
import Home from './pages/home/Home'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
       <Route path ='/' element = {<Home />} />
       <Route path ='/contact' element = { <Contact />} />  
    </Routes>
  )
}

export default App
