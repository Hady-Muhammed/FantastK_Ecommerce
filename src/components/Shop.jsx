import React, { useCallback } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SET_DATA } from '../redux/slices/dataSlice';
import Filter from './Filter';
import ProductCard from './ProductCard';
import Search from './Search';

const Shop = () => {
  const dispatch = useDispatch();
  // Import Global States
  const choosen = useSelector(state => state.filter.choosen);
  const range = useSelector(state => state.filter.range);
  const products = useSelector(state => state.data.products)
  // Functions
  const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log(data)
    dispatch(SET_DATA(data));
  }
  useEffect(() => {
    getProducts();
  } , [])
  return (
    <main id='shop'>
        <h2 className='text-center w-fit mx-auto text-5xl my-20 relative before:absolute before:w-1/4 before:h-[3px] before:-bottom-3 before:left-1/2 before:translate-x-[-50%] before:bg-[#673ab7] shadow-black font-bold'>WHAT<span className='text-[#673ab7]'>'</span>S TRENDING<span className='text-[#673ab7]'>?</span></h2>
        <div className='p-5'>
          {/* <Search/> */}
          <div className='flex xs:flex-col lg:flex-row'>
          
          <Filter/>

          {/* Products */}
          <div className={`${products ? 'grid' : 'block'} xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
          {
            products?
            products.map((product) => (
              choosen === product.category && product.price <= range && product.price >= 0?
                <ProductCard product={product} img={product.image} price={product.price} title={product.title} id={product.id} key={product.id}/>
              :
              choosen === 'all' && product.price <= range && product.price >= 0 ?
                <ProductCard product={product} img={product.image} price={product.price} title={product.title} id={product.id} key={product.id}/>
              :
              <></>
              ))
            :
            <div className='text-center text-5xl font-bold'>No Products Available!</div>
            }
          </div>
          
          </div>

        </div>
    </main>
  )
}

export default Shop