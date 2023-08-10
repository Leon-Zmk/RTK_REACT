import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart';
import { Link } from 'react-router-dom';

function AddToCart() {
  const {cartItems,totalPrice,quantity} = useSelector(state => state.cart);
  console.log(cartItems);
    if(cartItems.length ===0){
        return(
            <div className=" flex flex-col justify-center items-center mt-24">
                <h1 className=' tracking-wider text-xl text-violet-400'>Your Cart Is Empty </h1>
                <Link to="/">
                  <button className=' px-4 py-1 bg-violet-600 text-white'>Fill It</button>
                </Link>
            </div>
        )
    }
  return (
    
    <div>
        <div>
           {cartItems?.map(cartItem =>{

            return(
                <Cart key={cartItem.id} {...cartItem}></Cart>
            )
           })}
        </div>
        
        <div className='p-20'>
            <hr />
            <div className='flex justify-between m-5'>
                <p className=' text-bold text-xl text-green-500'>Total</p>
                <p className=' text-bold text-lg text-green-500'>${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default AddToCart