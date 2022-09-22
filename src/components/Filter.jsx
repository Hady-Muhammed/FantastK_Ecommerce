import React, { useRef } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { SET_ACTIVE_CATEGORY , SET_RANGE } from '../redux/slices/filterSlice';

const Filter = () => {
    const [price , setPrice] = useState(1000);
    const dispatch = useDispatch();
    const handleFilter = ({target}) => {
      dispatch(SET_ACTIVE_CATEGORY(target.innerHTML.toLowerCase()))
    }
    const handleRange = ({target}) => {
      setPrice(target.value)
      dispatch(SET_RANGE(price))
    }
  return (
    <div className='w-[30%] mr-5'>
    <div className='sticky top-[90px]'>
        <h2 className='text-xl font-bold'>Categories</h2>
        <ul className='space-y-2  flex flex-col mb-10'>
            <li onClick={handleFilter} className='border-b border-b-black p-2 hover:cursor-pointer border-l-2 border-l-transparent duration-150 hover:scale-[1.1] hover:border-l-[#673ab7]'>All</li>
            <li onClick={handleFilter} className='border-b border-b-black p-2 hover:cursor-pointer border-l-2 border-l-transparent duration-150 hover:scale-[1.1] hover:border-l-[#673ab7]'>Men's Clothing</li>
            <li onClick={handleFilter} className='border-b border-b-black p-2 hover:cursor-pointer border-l-2 border-l-transparent duration-150 hover:scale-[1.1] hover:border-l-[#673ab7]'>Women's Clothing</li>
            <li onClick={handleFilter} className='border-b border-b-black p-2 hover:cursor-pointer border-l-2 border-l-transparent duration-150 hover:scale-[1.1] hover:border-l-[#673ab7]'>Jewelery</li>
            <li onClick={handleFilter} className='border-b border-b-black p-2 hover:cursor-pointer border-l-2 border-l-transparent duration-150 hover:scale-[1.1] hover:border-l-[#673ab7]'>Electronics</li>
        </ul>
        <h3 className='text-xl font-bold'>Price</h3>
        <span className='text-[#673ab7] block my-3'>${price}</span>
        <input value={price} onChange={handleRange} min='0' max='1000' className='bg-gray-300 appearance-none rounded-md' type='range'/>
    </div>
    </div>
  )
}

export default Filter