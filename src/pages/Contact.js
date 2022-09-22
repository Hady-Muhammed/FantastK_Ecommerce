import React from 'react'
import MainBtn from '../components/MainBtn'
import {BsFillTelephoneFill,BsLinkedin} from 'react-icons/bs'
import {MdEmail , MdLocationPin} from 'react-icons/md'
const Contact = () => {
  return (
    <>
    <h1 className='font-bold text-5xl italic mt-10 ml-8'>Contact Us</h1>
    <section className='p-10 flex xs:flex-col lg:flex-row xs:space-x-0 lg:space-x-3'>
      <div className='w-1/2'>
        <form className='flex flex-col shadow-xl border border-t-[#673ab7] space-y-4 border-t-4 p-5'>
          <label>Name:</label>
          <input className='border rounded-md p-2 outline-none' required type='text' placeholder='Full Name'/>
          <label>Email:</label>
          <input className='border rounded-md p-2 outline-none' required type='email' placeholder='Your Email'/>
          <label>Subject:</label>
          <input className='border rounded-md p-2 outline-none' required type='text' placeholder='Subject'/>
          <label>Your Message:</label>
          <textarea className='border rounded-md p-2 outline-none' required  placeholder='Message'/>
          <MainBtn content='Send Message'/>
        </form>
      </div>
      <div className='text-white font-medium bg-[#673ab7] p-5 py-12 rounded-lg space-y-4 w-1/2 h-fit'>
        <h2 className='text-3xl'>Our Contact Information</h2>
        <p>Fill the form or contact us via other channels listed <br/> below</p>
        <ul className='space-y-2'>
          <li className='flex items-center'>
            <BsFillTelephoneFill className='mr-1'/>
            +234 705 141 6545
          </li>
          <li className='flex items-center'>
            <MdEmail className='mr-1'/>
            Support@eshop.com
          </li>
          <li className='flex items-center'>
            <MdLocationPin className='mr-1'/>
            Abuja, Nigeria
          </li>
          <li className='flex items-center'>
            <BsLinkedin className='mr-1'/>
            @HadyMohamed
          </li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default Contact