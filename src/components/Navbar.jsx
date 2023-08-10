import { Input } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const cartItems=useSelector(state=> state.cart.cartItems);
  const [Search,setSearch]=useState("");
  const [products,setProducts]=useState([])
  const navigate=useNavigate();

 
  useEffect(() =>{
      fetchProducts();
  },[])

  const fetchProducts = async ()=>{
      const api= await fetch("https://fakestoreapi.com/products");
      const data= await api.json();
      setProducts(data);
  }
  const filterProducts= products.filter((product)=> product.title.toLowerCase().includes(Search));

  const eventHandler=e=>{
    e.preventDefault();
    navigate("/search",{state:{filterProducts}});
    
  }
 
  return (
    <div>
        <div className='flex justify-between px-20 py-10 '>
            <h5>
                LazyDrip
            </h5>
            <div className='flex items-center'>
           <form onSubmit={eventHandler} >
           <Input
              placeholder="Search Your Product"
              size="md"
              value={Search}
              onChange={(e)=> setSearch(e.target.value)}
            />
           </form>
           <div className='relative '>
           <BsFillCartCheckFill className='  text-purple-400 text-2xl mx-2'/>
            <Link to="add-to-cart" >
            <p className=' absolute bottom-4 left-4  text-center rounded-[100%]  text-purple-400 '>{cartItems.length}</p>
            </Link>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar