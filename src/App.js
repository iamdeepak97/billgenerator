import React, { useState } from "react";
import ClientsDetails from "./component/ClientsDetails";
import Dates from "./component/Dates";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MainDetails from "./component/MainDetails";
import Notes from "./component/Notes";


function App() {
  const [data,setData]=useState({
    name:'',
    address:'',
    email:'',
    phone:'',
    quantity:'',
    productname:'', 
    invoicenumber:'',
    invoicedate:'',
    paymentmethod:'',
  })
  const [showinvoice, setshowinvoice] = useState(false);
  const handleUpdate=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const productname=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const productdate=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const emailss=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const phones=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
 
  const handleprint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-4 xl:max-w-x:mx-auto bg-white rounded shadow">
        {showinvoice ? (
          <div>
            <Header handleprint={handleprint} />
            <MainDetails data={data} />
            <ClientsDetails data={data} />
            <Dates data={data}/>
            
            <Notes />
            <Footer data={data}/>
            <button
              onClick={() => setshowinvoice(false)}
              className="bg-blue-500 text-white font-bold py-2 px-9 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mx-1"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
            
            <div className="container my-5 mx-5">
            <div>
            <div className="my-2">
              <label  htmlFor="name">Enter your name---</label>
              <input
                
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={data.name}
                onChange={handleUpdate}
              />
              
            </div>
            <div className="my-2">
              <label htmlFor="name">Enter your address---</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={data.address}
                onChange={handleUpdate}
              />
            </div>
            <div className="my-2">
              <label htmlFor="name">Enter your email---</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={data.email}
                onChange={emailss}
              />
            </div>
            <div className="my-2">
              <label htmlFor="name">Enter your phone---</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your phone"
                autoComplete="off"
                value={data.phone}
                onChange={phones}
              />
            </div>
            <div className="my-2">
              <label htmlFor="name">Quantity---</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="quantity"
                autoComplete="off"
                value={data.quantity}
                onChange={productname}
              />
            </div>
            <div className="my-2">
              <label htmlFor="name">Product name---</label>
              <input
                type="text"
                name="productname"
                id="productname"
                placeholder="productname"
                autoComplete="off"
                value={data.productname}
                onChange={productname}
              />
            </div>
            <div className="my-2">
              <label htmlFor="name">invoice no.---</label>
              <input
                type="text"
                name="invoicenumber"
                id="invoicenumber."
                placeholder="invoice no."
                autoComplete="off"
                value={data.invoicenumber}
                onChange={productdate}
              />
            </div>
            <div className="my-2">
              <label htmlFor="name">invoice date---</label>
              <input
                type="date"
                name="invoicedate"
                id="invoicedate"
                placeholder=""
                autoComplete="off"
                value={data.invoicedate}
                onChange={productdate}
              />
            </div>
           
          
            </div>
            <div className="my-2"> 

              <button 
                onClick={() => setshowinvoice(true)}
                className="bg-blue-500 text-white font-bold py-2 px-9 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mx-5"
              >
                Preview Invoice
              </button>
            
            </div>
            </div>
          </>
        )}
      
    </main>
    </>
  );
}

export default App;
