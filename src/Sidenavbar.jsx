import React, { useState } from 'react';
import { FaUserCircle, FaListUl, FaFileInvoiceDollar } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { MdOutlineMenuOpen } from "react-icons/md";

const Sidenav = () => {
   const [menu,setMenu] =useState(false)
  return (
    <div className="flex h-auto overflow-hidden w-full">
      <div className='fixed z-50 w-full h-12 flex justify-between  opacity-[0.8] bg-[#0f273a]'>
        <div className='w-[10%] flex justify-start items-center px-2'>
       <MdOutlineMenuOpen onClick={()=>setMenu(true)}  className='flex md:hidden text-4xl font-bold text-white' />
       </div>
       <div className='w-[90%] text-2xl md:text-4xl font-bold text-white  flex justify-center items-center'>
        <Link to="/">BILL GENERATE STYSTEM</Link>  
       </div>
       </div>
      <div className={!menu ? "hidden md:flex  h-screen flex-col w-[15%] bg-gray-800 text-white":"fixed z-40 flex  h-screen flex-col w-full opacity-[0.7] bg-gray-800 text-white"}>
  
      

      
        <nav className="mt-10 flex-grow ">
          <ul>
            <li className=' md:hidden w-full flex justify-end p-4 text-4xl' onClick={()=>setMenu(false)}>X</li>
          <li className='w-full flex justify-center my-4'>
              <Link to="/billing" className="flex text-2xl md:text-sm font-bold items-center px-4 py-2 hover:bg-gray-700 rounded-md" onClick={()=>setMenu(false)}>
                <FaFileInvoiceDollar className="" />
                <span className="ml-2">Bill Generator</span>
              </Link>
            </li>
            <li className='w-full flex justify-center my-4'>
              <Link to="/customerlist"  className="flex text-2xl md:text-sm font-bold items-center px-4 py-2 hover:bg-gray-700 rounded-md" onClick={()=>setMenu(false)}>
                <FaListUl className="" />
                <span className="ml-2 ">Customers List</span>
              </Link>
            </li>
          
          </ul>
        </nav>
      </div>

     
      <div className="flex-1 bg-gray-100 w-[75%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidenav;