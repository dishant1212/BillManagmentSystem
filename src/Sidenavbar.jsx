import React from 'react';
import { FaUserCircle, FaListUl, FaFileInvoiceDollar } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className="flex h-auto">

      <div className="flex flex-col w-48 bg-gray-800 text-white">
  
        <Link to ="/" className="flex items-center justify-center py-4">
          <FaUserCircle className="text-3xl" />
          <span className="ml-2 font-bold">Login</span>
        </Link>

      
        <nav className="mt-8 flex-grow">
          <ul>
          <li>
              <Link to="/billing" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
                <FaFileInvoiceDollar className="text-lg" />
                <span className="ml-2">Bill Generator</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/customerlist"  className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
                <FaListUl className="text-lg" />
                <span className="ml-2">Customers List</span>
              </Link>
            </li>
          
          </ul>
        </nav>
      </div>

     
      <div className="flex-1 bg-gray-100 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidenav;