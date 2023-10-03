import React from 'react'

export default function Header(handleprint) {
    const neww={handleprint}=handleprint
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
              Invoice
            </h1>
            <div>
              <ul className="flex items-center justify-between flex wrap">
                <li>
                  <button onClick={handleprint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    print
                  </button>
                </li>
               
                
              </ul>
            </div>
          </div>
        </header>
    </>
  )
}
