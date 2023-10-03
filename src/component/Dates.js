import React from 'react'

export default function Dates({data}) {
    const{invoicedate,invoicenumber}=data
  return (
    <>
      <article className="my-5 flex items-end justify-end">
          <ul>
            <li>
              <span className="font-bold">Invoice no:{invoicenumber}</span>
            </li>
            <li>
              <span className="font-bold">Invoice date:{invoicedate}</span>
            </li>
            
          </ul>
        </article>
    </>
  )
}
