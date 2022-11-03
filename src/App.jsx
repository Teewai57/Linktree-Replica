import React from 'react'
import Contact from './pages/Contact/Contact'
import Home from './pages/home/Home'
import {Routes,Route,Link} from 'react-router-dom'
import Toyo from './pages/toyo/Toyo'

const App = () => {
  return (
    <div>
    <Routes>
       <Route path ='/' element = {<Home />} />
       <Route path ='/contact' element = { <Contact />} />  
       <Route path ='/toyo' element = { <Toyo />} />  
    </Routes>
    </div>
  )
}

export default App
