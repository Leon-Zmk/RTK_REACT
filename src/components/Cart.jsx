import React from 'react'
import {  BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, removeFromCart, subQuantity } from '../features/services/cartSlice';

function Cart(props) {
   const {id,image,title,price,description,quantity}=props
   const dispatch=useDispatch();
   const oneItemPrice= price * quantity;
  return (
    <div>
        <div className='flex justify-between items-center px-20 py-10'>
           <div className='flex items-center gap-4'>
           <img src={image} className="w-[150px]  h-[150px]"  alt="" />
            <div>
                <p className='text-bold'>{title}</p>
                <p>${oneItemPrice}</p>
                <p onClick={()=> dispatch(removeFromCart(props))} className=' cursor-pointer text-red-500'>remove</p>
            </div>
           </div>
           <div>
            <p onClick={()=>dispatch(addQuantity(props))} className=' cursor-pointer text-green-400'><BsArrowUp/></p>
            <p className='text-center text-purple-500'>{quantity}</p>
            <p onClick={()=>quantity > 1 && dispatch(subQuantity(props))} className=' cursor-pointer text-green-400'><BsArrowDown/></p>
           </div>
        </div>
    </div>
  )
}

export default Cart