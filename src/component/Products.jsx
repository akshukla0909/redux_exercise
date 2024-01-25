// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { STATUS, fetchProd } from '../store/productSlice';

const Products = () => {

    const {data : products, status} =  useSelector((state)=> state.product);
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    // async function fetchdata(){
    //     const res = await axios.get('https://fakestoreapi.com/products');
    //     setProducts(res.data);
    //     console.log(products);
    // }

    useEffect( () => {
        // fetchdata();
        dispatch(fetchProd())

    }, [])

    const handleAdd = (product)=>{
        dispatch(add(product))
        console.log("ok");
    }

    if(status === STATUS.LOADING){
          return <div className='text-4xl capitalize text-red-600'>loading...</div>
    }


  return (
    <div className='productsWrapper'>
        {products.map(product=>
           <div className='card' key={product.id}>
              {product.name} 
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className='btn'
               onClick={()=>{handleAdd(product)}}
              >Add to cart</button>
            </div>
        )}
    </div>
  )
}

export default Products