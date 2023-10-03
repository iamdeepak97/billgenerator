import React from 'react'

export default function Footer({data}) {
    const {name,email,phone}=data
    
  return (
    <>
    <footer>
    <ul className="flex flex-wrap items-center justify-center">
      <li>
        <span className="font-bold">your Name:{name}</span>
      </li>
      <br/>
      <li>
        <span className="font-bold">your email:{email}</span>
      </li>
      <br/>
      <li>
        <span className="font-bold">phone number:{phone}</span>
      </li>
     
      
      
    </ul>
  </footer>
  </>)
}

