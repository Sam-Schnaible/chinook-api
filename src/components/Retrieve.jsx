import React, { useState } from 'react';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import Update from './Update.jsx';

export const retrieveContext = React.createContext();

const Retrieve = () => {

  const [customer, setCustomer] = useState({
   firstName: '',
    lastName: '',
    company: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    phone: '',
    fax: '',
    email: '',
    supportRepID: ''
  });

  const [customerID, setCustomerID] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: 'get',
      url: `http://localhost:3000/customers/${customerID}`
    })
    .then( result => {
      setCustomer(result.data);
    })
    .catch( err => {
      console.log(err.response);
    })
  }

  return (
    <>
      <h1>Retrieve Customer</h1>
      <form className='form-style' onSubmit={(e) => handleOnSubmit(e)}>
        <label>
          Enter Customer ID:
          <input type='text' required
          value={customerID} onChange={(e) => setCustomerID(e.target.value)}/>
        </label>
        <input type='submit' value='Get Customer'/>
      </form>
      <p>{customer.firstName}</p>
      <p>{customer.lastName}</p>
      <p>{customer.company}</p>
      <p>{customer.address}</p>
      <p>{customer.city}</p>
      <p>{customer.state}</p>
      <p>{customer.country}</p>
      <p>{customer.postalCode}</p>
      <p>{customer.phone}</p>
      <p>{customer.fax}</p>
      <p>{customer.email}</p>
      <p>{customer.supportRepID}</p>
      <retrieveContext.Provider value={customer}>
        <Update />
      </retrieveContext.Provider>
    </>
  )
}

export default Retrieve;