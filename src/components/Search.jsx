import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { useLocation } from 'react-router-dom';
import SearchCarts from './SearchCarts';

function Search() {
    const location=useLocation();
    const filterProducts=location.state.filterProducts;
    console.log(filterProducts);
    console.log(location);
   
  return (
    <div>
         <div className='flex flex-wrap justify-between gap-18 p-20'>
        {filterProducts?.map(product => {
            return (
                <SearchCarts key={product.id} {...product}></SearchCarts>
            )
        })}
    </div>
    </div>
  )
}

export default Search