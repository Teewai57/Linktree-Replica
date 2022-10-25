import React from 'react'
import ME from "../../assets/me.jpeg"
import "./Profile.css"

const Profile = () => {
    return (
        <>
        <div className='relative flex justify-center flex-wrap profile-section p-4 text-center'>
           <div className='items-center align-middle'>
                <div className='flex justify-center py-4'>
                <img id='profile_img' className='rounded-[50%] w-[6rem] h-[6.5rem]' src={ME} alt="" />
                </div>
                <h3 id='twitter' className='text-[1rem] font-bold'>ToyoAbasi Bob</h3>
                <h3 id='slack' className='hidden'>ToyoAbasi Bob</h3>
           </div>
            <div className='items-start absolute right-8'>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="40" height="40" rx="20" fill="white" />
                    <path d="M28.3261 21.5062C28.5296 21.3318 28.6313 21.2446 28.6686 21.1409C28.7013 21.0498 28.7013 20.9502 28.6686 20.8591C28.6313 20.7554 28.5296 20.6682 28.3261 20.4938L21.2672 14.4433C20.917 14.1431 20.7419 13.9931 20.5937 13.9894C20.4648 13.9862 20.3418 14.0428 20.2603 14.1427C20.1667 14.2576 20.1667 14.4883 20.1667 14.9495V18.5289C18.3878 18.8401 16.7597 19.7415 15.5498 21.0949C14.2307 22.5704 13.501 24.48 13.5 26.4591V26.9691C14.3745 25.9157 15.4663 25.0638 16.7006 24.4716C17.7889 23.9495 18.9653 23.6403 20.1667 23.5588V27.0505C20.1667 27.5117 20.1667 27.7424 20.2603 27.8573C20.3418 27.9572 20.4648 28.0138 20.5937 28.0106C20.7419 28.0069 20.917 27.8569 21.2672 27.5567L28.3261 21.5062Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <rect x="1" y="1" width="40" height="40" rx="20" stroke="#D0D5DD" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 3" />
                </svg>

            </div>
        </div>
        
        </>
    )
}

export default Profile
