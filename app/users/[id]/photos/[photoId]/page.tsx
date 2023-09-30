import React from 'react'

interface Props{
    params: {id:number, photoId:number}
}
const PhotoPage = ({params: {id,photoId}}:Props) => {
  return (
    <div>id : {id} , photoID: {photoId}</div>
  )
}

export default PhotoPage