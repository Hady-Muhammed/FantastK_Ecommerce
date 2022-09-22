import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MainBtn from '../../components/MainBtn'
import forgetImg from '../../assets/forget.png'
import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from '../../firebase/config'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
const Reset = () => {
  const [email , setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setIsLoading(false);
      toast.success('Password reset Sent to your Email')
    })
    .catch((error) => {
      setIsLoading(false);
      const errorMessage = error.message;
      toast.error(errorMessage)
    });
  }
  return (
    <>
    { isLoading && <Loader/>}
    <div className='p-5 flex xs:flex-col md:flex-row max-w-[1000px] mx-auto my-5'>
    <img className='max-w-[500px] animate-comeDown' src={forgetImg} alt='register' />
    {/* Form Submitting */}
    <form onSubmit={resetPassword} className='shadow-lg flex flex-col w-full border space-y-5 p-10 pt-16 animate-comeUp'>
      <h1 className='text-[#673ab7] text-4xl text-center'>Reset Password</h1>
      <input className='rounded-md border p-2 border-[#673ab7] outline-none caret-[#673ab7] font-bold' value={email} onChange={({target}) => setEmail(target.value)} placeholder='Your Email' type='email'/>
      <MainBtn content='Reset Password'/>
      <div className='flex justify-between'>
      <span>-<Link to='/FantastK_Ecommerce/login' className='font-bold'>Login</Link></span>
      <span>-<Link to='/FantastK_Ecommerce/register' className='font-bold'>Register</Link></span>
      </div>
    </form>
  </div>
  </>
  )
}

export default Reset