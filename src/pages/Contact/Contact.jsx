import React from 'react'
import Footer from '../../Components/Footer/Footer'

const Contact = () => {


  return (
    <>
    <div>
  <div className="mx-auto max-w-5xl px-4 mt-8 md:mt-40 sm:px-6 lg:px-8 py-5">

    <div className='py-7'>
      <h3 className=' text-[36px] font-bold text-[#101828] '>Contact Me</h3>
      <p className='text-md text-[#475467]'>Hi there, contact me to ask about anything you have in mind.</p>
    </div>

        <form action="" className="space-y-4">
          

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className='space-y-2'>
              <label className="text-md font-[500] text-[#344054]" for="name">First Name</label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-md"
                placeholder="Enter your first name"
                type="text"
                id="first_name"
              />
            </div>

            <div className='space-y-2'>
              <label className="text-md font-[500] text-[#344054]" for="name">Last Name</label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-md"
                placeholder="Enter your last name"
                type="text"
                id="last_name"
              />
            </div>

          </div>
          <div className='space-y-2'>
            <label className="text-md font-[500] text-[#344054]" for="email">Email</label>
            <input
              className="w-full rounded-lg border border-gray-200 p-3 text-md"
              placeholder="yourname@gmail.com"
              type="email"
              id="email"
            />
          </div>

          <div className='space-y-2'>
            <label className="text-md font-[500] text-[#344054]" for="message">Message</label>
            <textarea
              className="w-full rounded-lg border border-gray-200 p-3 text-md"
              placeholder="Send me a message and i'll reply you as soon as possible..."
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="col-span-6">
            <label for="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 border rounded-[1rem] border-gray-200 bg-white shadow-sm"
              />

              <span className="text-md text-[#475467] ">
               You agree to providing your data to {} who may contact you.
              </span>
            </label>
          </div>

          <button
        type="submit"
        className="block w-full rounded-lg bg-[#1570EF] px-5 py-4 text-md font-medium text-white "
      >
        Send message
      </button>
        </form>
    </div>
  </div>
  <Footer />
  </>
  )
}

export default Contact