import React from 'react'
import AddToCart from './AddToCart'
import styles from './ProductCart.module.css'

const ProductCart = () => {
  return (
    <div className='p-5 my-5 bg-sky-300 hover:bg-sky-500 rounded-md text-xl text-white'>
      <AddToCart />
    </div>
  )
}

export default ProductCart