import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/services/cartSlice';

function SearchCarts(props) {
   const {id,image,title,description,price} = props;
   const dispatch=useDispatch();
  return (
    <div>
          <div className='flex flex-col w-100 shadow-sm hover:shadow-lg rounded p-6 my-4 justify-content-between'>
            <img src={image} className=' w-[200px] h-[200px]' alt="" />
            <div className="mt-3 flex flex-col gap-3">
                <h5>{title.substring(0,10)}...</h5>
                <p>${price}</p>
                <button className=" bg-purple-400 p-2 rounded text-white" onClick={()=> dispatch(addToCart(props))}>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default SearchCarts