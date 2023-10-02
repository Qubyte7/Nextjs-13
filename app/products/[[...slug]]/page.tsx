import React from 'react'
interface Props{
    params :{slug:string[]},
    
}

const ProductPage = ({params :{slug}}:Props) => {
  return (
    <div>ProductPage , SLUG {slug}</div>
  )
}

export default ProductPage

// [[..slug]] = [[]] : menas that this  is optional ,  then the ... means the it is url which can contain more than one path