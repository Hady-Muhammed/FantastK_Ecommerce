import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FaShoppingCart ,FaWindowClose , FaUser} from 'react-icons/fa'
import {HiMenuAlt3} from 'react-icons/hi'
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {REMOVE_ACTIVE_USER, SET_ACTIVE_USER} from '../redux/slices/authSlice'
// Logo Variable
export const logo = (
  <div className="text-center py-2 text-5xl font-extrabold text-black/30">
    Fantast<span className="text-[#673ab7]">K</span>
    <span className="font-serif">.</span>
  </div>
);



const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [nav , setNav] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [user , setUser] = useState('');
  // Importing Global States
  const inCart = useSelector(state => state.cart.cart);


  // Currently Signed in User
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email.split('@')[0])
        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.email.split('@')[0],
          userId: user.uid,
        }));
      } else {
        setUser('');
        dispatch(REMOVE_ACTIVE_USER())
      }
    });
  }, [dispatch]);

  const toggleNav = () => {
    setNav(prev => !prev);
  }
  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      setIsLoading(false)
      toast.success('Logged out!')
      navigate('/FantastK_Ecommerce/')
    }).catch((error) => 
    {
      setIsLoading(false)
      toast.error(error.message)
    });
  }
  return (
   <>
   {
    isLoading && <Loader/>
   }
    <nav className="bg-transparent w-full lg:py-5 px-10 xs:pt-[25px]">
      {/* Logo */}
      <Link to="/">{logo}</Link>
    </nav>
    <div className="justify-between xs:hidden md:flex mt-8 sticky top-0 z-10 py-5 px-10 bg-white">
          {/* Header Left */}
          <ul className="flex space-x-8 font-semibold text-xl">
            <Link className="border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" to="/FantastK_Ecommerce/">Home</Link>
            <Link className="border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" to="/FantastK_Ecommerce/contact">Contact Us</Link>
          </ul>
          {/* Header Right */}
          <ul className="flex space-x-8 font-semibold text-xl">
            {
              user ?  
              <>
              <Link className="flex items-center border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300 text-[#673ab7]" to='/FantastK_Ecommerce/'><FaUser className="mr-2"/>Hi,{user}</Link>
              <Link className="border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" onClick={logOut} to='/FantastK_Ecommerce/'>Logout</Link>
              <Link className="border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" to='/FantastK_Ecommerce/orders'>My Orders</Link>
              <Link className="border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300 flex items-center" to='/FantastK_Ecommerce/cart'>
                <>
                Cart
                <FaShoppingCart/>
                <sup className={`${inCart.length? 'w-[15px] h-[15px] rounded-full bg-red-500 text-white opacity-[1] flex justify-center items-center' : 'opacity-0'} duration-150`}>{inCart.length ? inCart.length : "" }</sup>
                </>
              </Link>
              </>
              :
              <>
              <Link className="border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" to='/FantastK_Ecommerce/login'>Login</Link>
              <Link className="border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" to='/FantastK_Ecommerce/register'>Register</Link>
              </>
            }
            
          </ul>
      </div>
      <button className={`xs:block fixed w-full bg-white z-[2] top-0 left-1/2 translate-x-[-50%] md:hidden`} onClick={toggleNav}>
        <HiMenuAlt3 className="text-[#673ab7] mx-auto" size={40}/>
      </button>
      {/* Mobile Menu */}
      <ul className={`fixed top-0 ${nav? 'left-0':'left-[-450px]'} z-[5] duration-500 w-[400px] h-full bg-white shadow-lg`}>
        <div className="flex items-center justify-evenly mt-5">
          {logo}
          <div>
          <FaWindowClose className="text-[#673ab7] cursor-pointer" onClick={toggleNav} size={30}/>
          </div>
        </div>
        <div className="flex flex-col p-10 space-y-8">
        <Link onClick={toggleNav} className="text-xl font-medium p-2 border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" to="/FantastK_Ecommerce/">Home</Link>
          <Link onClick={toggleNav} className="text-xl font-medium p-2 border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" to="/FantastK_Ecommerce/contact">Contact Us</Link>
          {
            user ?
            <>
            <Link onClick={toggleNav} className="text-xl font-medium p-2 border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300 text-[#673ab7] flex" to='/FantastK_Ecommerce/'><FaUser className="mr-2"/>Hi,{user}</Link>
            <Link onClick={toggleNav} className="text-xl font-medium p-2 border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" to='/FantatsK_Ecommerce/orders'>My Orders</Link>
            <Link onClick={toggleNav} className="text-xl font-medium p-2 border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300 flex items-center" to='/FantastK_Ecommerce/cart'>
              <>
              Cart
              <FaShoppingCart/>
              <sup className={`${inCart.length? 'w-[15px] h-[15px] rounded-full bg-red-500 text-white opacity-[1] flex justify-center items-center' : 'opacity-0'} duration-150`}>{inCart.length ? inCart.length : "" }</sup>
              </>
            </Link>
            <Link className="text-xl font-medium p-2 border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" onClick={logOut} to='/FantastK_Ecommerce/'>Logout</Link>

            </>
            :
            <>
            <Link onClick={toggleNav} className="text-xl font-medium p-2 border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" to='/FantastK_Ecommerce/login'>Login</Link>
            <Link onClick={toggleNav} className="text-xl font-medium p-2 border-b hover:border-b-[#673ab7] focus:border-b-[#673ab7] focus:border-b duration-300" to='/FantastK_Ecommerce/register'>Register</Link>

            </>
          }
          
        </div>
      </ul>
      {/* Overlay Black Screen  */}
      <div className={`${nav ? 'opacity-[1] pointer-events-auto' : 'opacity-0 pointer-events-none'} z-[3] fixed left-0 top-0 w-full h-full bg-black/50`} onClick={toggleNav}>

      </div>
    </>    
  );
};

export default Navbar;
