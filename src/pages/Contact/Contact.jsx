import React, { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../../Components/Footer/Footer'
import Validation from '../../Components/Validation'
import "./Contact.css"
const Contact = () => {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })


  const [errors, setError] = useState({})

  const data = {
    name: "Toyoabasi Bob"
  }

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(Validation(values));

  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && (values.firstName !== "" && values.lastName !== "" && values.email !== "" && values.message !== "")) {
      alert("Form Submitted");
    }
  }, [errors])

  return (
    <>
      <div className='md:mb-[7rem]'>
        <div className="mx-auto max-w-5xl px-4 mt-8 md:mt-[7rem] sm:px-6 lg:px-8 py-5">

          <div className='py-7'>
            <h3 className=' text-[36px] font-bold text-[#101828] '>Contact Me</h3>
            <p className='text-md text-[#475467]'>Hi there, contact me to ask about anything you have in mind.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" >


            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className={`firstname ${errors.firstName
                ? 'error'
                : 'no_error'
                }`}>
                <label className="text-md font-[500] text-[#344054]" for="name">First Name</label>
                <input
                  className="w-full rounded-lg border p-3 text-md focus:outline-none focus:shadow-outline focus:border-sky-300"
                  placeholder="Enter your first name"
                  type="text"
                  id="first_name"
                  name='firstName'
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleFocus}
                  focused={focused.toString}

                />
                {errors.firstName && <p style={{ color: "#F83F23", fontSize: "15px" }}>{errors.firstName}</p>}
              </div>

              <div className={`firstname ${errors.lastName
                ? 'error'
                : ''
                }`}>
                <label className="text-md font-[500] text-[#344054]" for="name">Last Name</label>
                <input
                  className="w-full rounded-lg border p-3 text-md focus:outline-none focus:shadow-outline focus:border-sky-300"
                  placeholder="Enter your last name"
                  type="text"
                  id="last_name"
                  name='lastName'
                  onChange={handleChange}
                  value={values.lastName}

                />
                {errors.lastName && <p style={{ color: "#F83F23", fontSize: "15px" }}>{errors.lastName}</p>}
              </div>

            </div>
            <div className={`firstname ${errors.email
              ? 'error'
              : ''
              }`}>
              <label className="text-md font-[500] text-[#344054]" for="email">Email</label>
              <input
                className="w-full rounded-lg border p-3 text-md focus:outline-none focus:shadow-outline focus:border-sky-300"
                placeholder="yourname@gmail.com"
                type="email"
                id="email"
                name='email'
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && <p style={{ color: "#F83F23", fontSize: "15px" }}>{errors.email}</p>}
            </div>

            <div className={`firstname ${errors.message
              ? 'error'
              : ''
              }`}>
              <label className="text-md font-[500] text-[#344054]" for="message">Message</label>
              <textarea
                className="w-full rounded-lg border p-3 text-md focus:outline-none focus:shadow-outline focus:border-sky-300"
                placeholder="Send me a message and i'll reply you as soon as possible..."
                rows="8"
                id="message"
                name='message'
                onChange={handleChange}
                value={values.message}
              ></textarea>
              {errors.message && <p style={{ color: "#F83F23", fontSize: "15px" }}>{errors.message}</p>}
            </div>

            <div className="col-span-6">
              <label for="MarketingAccept" className="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="h-5 w-5 border rounded-[1rem] border-gray-200 bg-white shadow-sm "

                />
                <span className="text-md text-[#475467] ">
                  You agree to providing your data to {data.name} who may contact you.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-[#1570EF] hover:bg-[#175CD3] disabled:bg-[#B2DDFF] active:bg-[#1570EF] focus:outline-none focus:ring focus:ring-[#B2DDFF] px-5 py-4 text-md font-medium transition text-white"
              id='btn__submit'
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