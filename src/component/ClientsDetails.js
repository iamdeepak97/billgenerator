import React from 'react'

export default function ClientsDetails({data}) {
    const {productname,quantity}=data;
  return  (
    <>
      <section className="mt-5">
          <h2>productname:{productname}</h2>
          <p>Quantity:{quantity}</p>
        </section>
    </>
  )
}
