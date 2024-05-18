import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CiSquareRemove } from "react-icons/ci";

const CustomerList = () => {
  const [billData,setBillData]=useState([])
  const bills = useSelector(state => state.billReducer.bills);

  const removeItem=(id)=>{
      const removeFilterData=billData.filter((item)=>{
         return item.customerMobile!==id
      })
      setBillData(removeFilterData)
  }


  useEffect(()=>{
     setBillData(bills)
  },[])

  return (
    <div className='h-screen w-full overflow-y-hidden'>
    
      <h1 className='text-3xl h-[20%] font-bold flex flex-col justify-end pb-4 px-4'>Customer List </h1>
      <div className='flex flex-wrap  h-[80%] w-full overflow-x-scroll'>
     {billData.length >=1 ? <div className='flex'> 
        {billData.map((bill, index) => (
          <div key={index} className=" h-[400px] w-[300px] mx-4   p-4 border rounded-md shadow-md">
            <p className='w-full flex justify-end items-center   text-[red] font-bold'>
            <CiSquareRemove className='text-2xl font-bold' onClick={()=>removeItem(bill.customerMobile)} />
            </p>
          <h3 className="text-lg font-bold mb-2">Customer Name: {bill.customerName}</h3>
          <p>Mobile Number: {bill.customerMobile}</p>
          <p>Address: {bill.customerAddress}</p>
          <p>Billing Date: {bill.billingDate}</p>
          <h4 className="text-md font-bold mt-2">Items:</h4>
          <ul>
            {bill.items.map((item, idx) => (
              <li key={idx}>
                {item.quantity} x {item.name} - ${item.price} (Total: ${item.quantity * item.price})
              </li>
            ))}
          </ul>
          <p className="font-bold mt-2">Grand Total: ${bill.grandTotal}</p>
        </div>
        ))}
      </div>: <Link to="/billing" className="p-2 h-10 bg-blue-600 text-white  rounded-lg">go create bill First </Link>}
    </div>
    </div>
  );
};

export default CustomerList;





