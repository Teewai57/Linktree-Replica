import React from 'react'
import Contact from './pages/Contact/Contact'
import Home from './pages/home/Home'
import {Routes,Route,Link} from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Routes>
       <Route path ='/' element = {<Home />} />
       <Route path ='/contact' element = { <Contact />} />  
    </Routes>
    </div>
  )
}

export default App
