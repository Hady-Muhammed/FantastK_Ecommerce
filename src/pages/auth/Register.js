import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import registerImg from '../../assets/register.png'
import MainBtn from '../../components/MainBtn'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/config'
import Loader from '../../components/Loader';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //  Confirm Password
  const [cPassword, setCPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const registerUser = (e) => {
    e.preventDefault();
    if(password === cPassword) {
    // Firing Loading Overlay
    setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            setIsLoading(false);
            toast.success('Registration Successfull!')
            navigate('/FantastK_Ecommerce/login')
          })
          .catch((error) => {
            setIsLoading(false);
            const errorMessage = error.message;
            toast.error(errorMessage)
        });

    } else {
      toast.error('Passwords Didn\'t Match!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  return (
    <> {
      isLoading && <Loader/>
    }
    <div className='p-5 flex xs:flex-col md:flex-row max-w-[1000px] mx-auto my-5'>
    {/* Form Submitting */}
    <form onSubmit={registerUser} className='shadow-lg flex flex-col w-full border space-y-5 p-10 pt-16 animate-comeUp'>
      <h1 className='text-[#673ab7] text-4xl text-center'>Register</h1>
      <input className='rounded-md border p-2 border-[#673ab7] outline-none caret-[#673ab7] font-bold' onChange={({target}) => setEmail(target.value)} value={email} required placeholder='Your Email' type='email'/>
      <input className='rounded-md border p-2 border-[#673ab7] outline-none caret-[#673ab7] font-bold' onChange={({target}) => setPassword(target.value)} value={password} required placeholder='Your Password' type='password'/>
      <input className='rounded-md border p-2 border-[#673ab7] outline-none caret-[#673ab7] font-bold' onChange={({target}) => setCPassword(target.value)} value={cPassword} required placeholder='Confirm Password' type='password'/>
      <MainBtn content='Register'/>
      <span>Already have an account? <Link to='/FantastK_Ecommerce/login' className='font-bold'>Login</Link></span>
    </form>
    <img className='max-w-[500px] animate-comeDown' src={registerImg} alt='register' />
  </div>
  </>
  )
}

export default Register