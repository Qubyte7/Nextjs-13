import React from 'react'
interface Props{
    params :{slug:string[]},
    searchParams:{sortOrder:string},
}

const ProductPage = ({params :{slug},searchParams:{sortOrder}}:Props) => {
  return (
    <div>ProductPage , SLUG {slug} , searchParams : {sortOrder}</div>
  )
}

export default ProductPage


// [[..slug]] = [[]] : menas that this  is optional ,  then the ... means the it is url which can contain more than one path