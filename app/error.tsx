'use client'
import React from 'react'
// what you have to know is that  the error must be a client component error
//and this file can not capture the error in the root page  ex: layout page of the root page of our page
//so we need to use global-error file
interface Props{
    error:Error,
    reset:() =>{}
}


const ErrorPage = ({error,reset}:Props) => {

  return (
    <>
    <div>Unexpected error has occured .</div>
    <button className='btn' onClick={() => reset()}>Retry</button>
    </>
  )
}

export default ErrorPage