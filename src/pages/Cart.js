import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import MainBtn from '../components/MainBtn';
import { DELETE_FROM_CART } from '../redux/slices/inCartSlice';
const Cart = () => {
  
  const dispatch = useDispatch();
  // Importing Global State
  const inCart = useSelector(state => state.cart.cart)
  // Functions 
  const deleteProduct = (product) => {
    DELETE_FROM_CART(product);
  }
  return (
    <div>
      <table className='mx-auto w-3/4 text-center'>
        <caption className='text-3xl font-bold my-8'>Shopping Cart</caption>
        <thead className='border-y-2 border-y-[#673ab7]'>
          <tr>
            <td className='p-3'>
              no.
            </td>
            <td>
              Product
            </td>
            <td>
              Price
            </td>
            <td>
              Quantity
            </td>
            <td>
              Total
            </td>
            <td>
              actions
            </td>
          </tr>
        </thead>

        <tbody className='bg-[#683ab718]'>
          {inCart.map(product => (
          <tr>
            <td>
              {product.id}
            </td>
            <td>
              <span>{product.category}</span>
              <img className='w-[65px] mx-auto' src={product.image} alt='x'/>
            </td>
            <td>
              {product.price}
            </td>
            <td>
              1
            </td>
            <td>
              {product.price}
            </td>
            <td>
              <div onClick={(e) => {
                e.target.parentElement.parentElement.parentElement.remove();
                deleteProduct(product)
                }}>
                <MainBtn content='delete'/>
              </div>
            </td>
          </tr>
          ) )}
        </tbody>
      </table>
    </div>
  )
}

export default Cart