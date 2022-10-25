import React from 'react'
import {AiOutlineSlack} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"

const Socials = () => {
  return (
    <div className='md:flex hidden justify-center space-x-3 py-3 mb-4'>
      <div>
        <a href="">        
        <AiOutlineSlack />
        </a>
      </div>
      <div>
        <a href="https://www.github.com/teewai57" target="_blank">
        <AiOutlineGithub />
        </a>
      </div>
    </div>
  )
}

export default Socials
