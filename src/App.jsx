import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Products from './components/Products'
import AddToCart from './components/AddToCart'
import Navbar from './components/Navbar'
import Search from './components/Search'
import RouteGuard from './components/RouteGuard'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
        <Route path="add-to-cart" element={<AddToCart></AddToCart>}></Route>
        <Route path="/search" element={<RouteGuard><Search></Search></RouteGuard>}></Route>
      </Routes>
    </div>
  )
}

export default App