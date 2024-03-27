import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Sidenav from './Sidenavbar';
import LoginForm from './Login';
import BillGenerator from './Billing';
import CustomerList from './CustomerList';

function App() {
  

  return (

   <>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element={<Sidenav />} >
    <Route index element = {<LoginForm />} />
    <Route path= "/billing" element = {<BillGenerator />} />
    <Route path= "/customerlist" element = {<CustomerList />} />
    </Route>

    </Routes>
    
    </BrowserRouter>
    <ToastContainer />
   </>
  );
}

export default App;
