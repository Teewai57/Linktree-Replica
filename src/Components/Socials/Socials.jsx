import React from 'react'
import {AiOutlineSlack} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"

const Socials = () => {
  return (
    <div className='md:flex hidden justify-center space-x-3 py-3'>
      <div>
        <AiOutlineSlack />
      </div>
      <div>
        <AiOutlineGithub />
      </div>
    </div>
  )
}

export default Socials
