import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import { addBill } from './Actions/actions';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const BillGenerator = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerMobile, setCustomerMobile] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [billingDate, setBillingDate] = useState('');
  const [items, setItems] = useState([{ name: '', quantity: 1, price: 0 }]);
const dispatch = useDispatch()
const [open, setOpen] = React.useState(false);
const navigate = useNavigate()

const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

const handleNavigate = ()=>{
  navigate('/customerlist')
}

  const handleAddItem = () => {
    setItems([...items, { name: '', quantity: 1, price: 0 }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const calculateGrandTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   const billData = {
    customerName,
    customerMobile,
    customerAddress,
    billingDate,
    items,
    grandTotal: calculateGrandTotal()
   }  
    
   handleOpen();
   dispatch(addBill(billData));

    // Reset form fields
    setCustomerName('');
    setCustomerMobile('');
    setCustomerAddress('');
    setBillingDate('');
    setItems([{ name: '', quantity: 1, price: 0 }]);
  };

  return (
    <>
    <div className="w-full h-screen px-4 pt-14 ">
      
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="customerName" className="block font-bold ">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            required
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full px-3 py-[5px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="">
          <label htmlFor="customerMobile" className="block font-bold mb-1">
            Customer Mobile Number
          </label>
          <input
          required
            type="text"
            id="customerMobile"
            value={customerMobile}
            onChange={(e) => setCustomerMobile(e.target.value)}
            className="w-full px-3 py-[5px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="">
          <label htmlFor="customerAddress" className="block font-bold mb-1">
            Customer Address
          </label>
          <textarea
          required
            id="customerAddress"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            className="w-full px-3 py-[5px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="">
          <label htmlFor="billingDate" className="block font-bold mb-1">
            Billing Date
          </label>
          <input
          required
            type="date"
            id="billingDate"
            value={billingDate}
            onChange={(e) => setBillingDate(e.target.value)}
            className="w-full px-3 py-[5px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold ">Items</h3>
          <div className=' flex  overflow-x-scroll h-26'>
          {items.map((item, index) => (
            <div key={index} className="mb-2 flex border-2 space-y-2 md:space-y-0 p-2 mx-4  flex-col md:flex-row items-center">
                <label htmlFor="">Product Name
                <br />
                <input
                required
                type="text"
                placeholder="Product Name"
                value={item.name}
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
              />
              </label>
              <label htmlFor="">Quantity
                <br />
                <input
                required
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 w-full md:w-24"
              />
              </label>
              <label htmlFor="">Price
              <br />
              <input
                required
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 w-full md:w-24"
              />
              </label>
              <span className="font-bold mr-2">
                Total: {item.quantity * item.price}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveItem(index)}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          </div>
          <div className='flex justify-between'>
          <button
            type="button"
            onClick={handleAddItem}
            className="bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Add Item
          </button>
          <div className="flex justify-end mb-2">
            <span className="font-bold">Grand Total: {calculateGrandTotal()}</span>
          </div>
          </div>
        </div>
        <div className=" w-full flex justify-center ">
          <button
          // onClick={handleOpen}
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Bill Generate
          </button>
        </div>
      </form>
    </div>
    {
    open? <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
  >
    <Box sx={{ ...style, width: 400 }}>
      <h2 id="child-modal-title " className='text-green-600 text-2xl  '>Successfully Generate</h2>
      <p id="child-modal-description">
        You can check bill in cutomer list 
      </p>
      <div className='flex justify-between mt-4'>
      <Button style={{color:"white",padding:"2px", backgroundColor:"red"}} onClick={handleClose}>close</Button>
      <Button style={{color:"white",padding:"3px", backgroundColor:"blue"}} onClick={handleNavigate}>customerList</Button>
      </div>
    </Box>
  </Modal>:""
    }
     
    </>

  );
};

export default BillGenerator;