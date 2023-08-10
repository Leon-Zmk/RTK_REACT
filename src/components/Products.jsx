import React, { useEffect, useState } from 'react'
import Product from './Product';
import Loading from './Loading';

function Products() {
    const [products,setProducts]=useState([])
    const [isLoading,setLoading]=useState(true);

    useEffect(() =>{
        fetchProducts();
    },[])

    const fetchProducts = async ()=>{
        const api= await fetch("https://fakestoreapi.com/products");
        const data= await api.json();
        setProducts(data);
        setLoading(false);
    }
    if(isLoading){
        return(
            <div>
                <Loading></Loading>
            </div>
        )
    }
  return (
    <div>
        
        <div className='flex flex-wrap justify-between gap-18 p-20'>
        {products?.map(product => {
            return (
                <Product key={product.id} {...product}></Product>
            )
        })}
    </div>
    </div>
  )
}

export default Products