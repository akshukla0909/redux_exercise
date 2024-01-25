import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {

  const items = useSelector((state)=> state.cart);
  const dispatch = useDispatch();

  const removeHandle = (productId)=>{
    //  console.log(productId);
     dispatch(remove(productId))
  } 



  return (
    <div className='bg-zinc-700 w-full h-[full] text-black'>

       {items.map((item,index)=>
            <div key={index} className='cartCard'>
            <img src={item.image} alt="" />
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button className='btn'
               onClick={()=>{removeHandle(item.id)}}
              >remove item</button>
            </div>
       )}
    </div>
    
  )
}

export default Cart