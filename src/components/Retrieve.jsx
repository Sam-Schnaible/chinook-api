import React, { useState } from 'react';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import Update from './Update.jsx';

export const retrieveContext = React.createContext();

const Retrieve = () => {

  const [customer, setCustomer] = useState('');

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
      setCustomer('')
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
      <p>First Name: {customer.first_name}</p>
      <p>Last Name: {customer.last_name}</p>
      <p>Company: {customer.company}</p>
      <p> Address: {customer.address}</p>
      <p>City: {customer.city}</p>
      <p>State: {customer.state}</p>
      <p>Country: {customer.country}</p>
      <p>Postal Code: {customer.postal_code}</p>
      <p>Phone: {customer.phone}</p>
      <p>Fax: {customer.fax}</p>
      <p>Email: {customer.email}</p>
      <p>Support Rep ID: {customer.support_rep_id}</p>
      <retrieveContext.Provider value={customer}>
        <Update />
      </retrieveContext.Provider>
    </>
  )
}

export default Retrieve;