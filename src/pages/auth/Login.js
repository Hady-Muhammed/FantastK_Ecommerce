import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase/config'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../../assets/login.png'
import MainBtn from '../../components/MainBtn'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false)
        // const user = userCredential.user;
        toast.success('Welcome Back!!');
        navigate('/FantastK_Ecommerce/')
      })
      .catch((error) => {
        setIsLoading(false)
        const errorMessage = error.message;
        toast.error(errorMessage)
      });
  }

  return (
    <>
    {
      isLoading && <Loader/>
    }
    <div className='p-5 flex xs:flex-col md:flex-row max-w-[1000px] mx-auto'>
      <img className='max-w-[500px] animate-comeDown' src={loginImg} alt='login' />
      {/* Form Submitting */}
      <form onSubmit={handleLogin} className='shadow-lg flex flex-col w-full border space-y-5 p-10 pt-16 animate-comeUp'>
        <h1 className='text-[#673ab7] text-4xl text-center'>Login</h1>
        <input className='rounded-md border p-2 border-[#673ab7] outline-none caret-[#673ab7] font-bold' value={email} onChange={({target}) => setEmail(target.value)} placeholder='Your Email' type='email'/>
        <input className='rounded-md border p-2 border-[#673ab7] outline-none caret-[#673ab7] font-bold' value={password} onChange={({target}) => setPassword(target.value)} placeholder='Your Password' type='password'/>
        <MainBtn content='Login'/>
        <Link className='hover:decoration-[#673ab7] hover:underline hover:underline-offset-4 w-fit' to='/FantastK_Ecommerce/reset'>Forget Password</Link>
        <p className='text-center'>--Or--</p>
        <p>Don't have an account? <Link to='/FantastK_Ecommerce/register' className='font-bold'>Register</Link></p>
      </form>
    </div>
    </>
  )
}

export default Login