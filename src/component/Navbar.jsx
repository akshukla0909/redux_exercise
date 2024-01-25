import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
  const item = useSelector((state)=>state.cart)
  console.log(item)

  return (
    <div className='flex items-center px-6 text-lg justify-between bg-red-700 h-[15vh] text-white'>
        <span>React-Store</span>
        <div className='flex items-center gap-6'>
        <Link to='/' >Home</Link>
        <Link to='/cart' >Cart</Link>
        <span className='font-bold'>CART ITEMS : {item.length}</span>
        </div>
    </div>
  )
}

export default Navbar