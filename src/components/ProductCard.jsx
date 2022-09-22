import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SET_IN_CART } from '../redux/slices/inCartSlice';
import MainBtn from './MainBtn'

const ProductCard = ({img , price , title , id , product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Importing Global States
  const auth = useSelector(state => state.auth.email);
  // Functions  
  const handleCart = () => {

    if(!auth || auth === '') {
      navigate('/FantastK_Ecommerce/login');
      toast.error('Please Login!')
    } else {
      // toast.success('added to cart', {
      //   position: "top-left",
      // })

      // Putting Product In Cart
      dispatch(SET_IN_CART(product))
    }
  }
  return (
    <div className='text-center shadow-lg flex flex-col justify-between hover:scale-105 duration-300'>
        <Link to={`/FantastK_Ecommerce/${id}`}>
          <div>
            <img className='w-[150px] h-[200px] mx-auto' src={img} alt="img" />
          </div>
        <hr className='mt-2'/>
        <h3 className='text-center font-bold text-2xl text-[#673ab7] my-3'>${price}</h3>
        <p className='my-3 p-1 font-medium italic'>{title}</p>
        </Link>
        <div onClick={handleCart} className='flex'>
          <MainBtn content='Add To Cart'/>
        </div>
        
    </div>
  )
}

export default ProductCard