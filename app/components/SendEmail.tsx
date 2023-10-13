'use client'
async function fetching(){
 await fetch("/api/send",{method:"POST"})
   
}
import React from 'react'

const SendEmail = () => {
  return (
    <div>
        <h1>send Email</h1>
        <button onSubmit={() => fetching()} className='bg-emerald-600 m-3 p-3 rounded-md text-white font-bold'>send email</button>
    </div>
  )
}

export default SendEmail