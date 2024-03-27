import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CustomerList = () => {
  const bills = useSelector(state => state.billReducer.bills);

  return (
    <>
    
      <h1 className='text-3xl font-bold mb-20'>Customer List </h1>
      <div className='flex flex-wrap'>
     {bills.length >=1 ? <div className='flex flex-wrap'> 
        {bills.map((bill, index) => (
          <div key={index} className="max-w-md mx-4 my-8 p-4 border rounded-md shadow-md">
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
      </div>: <Link to="/billing" className="p-2 bg-blue-600 text-white  rounded-lg">go create bill First </Link>}
    </div>
    </>
  );
};

export default CustomerList;





