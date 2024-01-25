import React from 'react'
import Products from '../component/Products'

const Home = () => {
  return (
    <div className=' w-full h-[full] text-black'>
      <h3 className='flex items-center justify-center text-2xl py-4 text-xl font-semibold' >Products</h3>
      <Products/>
    </div>
  )
}

export default Home