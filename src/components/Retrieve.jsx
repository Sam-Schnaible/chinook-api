import React, { useState } from 'react';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import Create from './Create.jsx';

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
      <form className='form-style container-form' id='ret-form' onSubmit={(e) => handleOnSubmit(e)}>
        <label>
          Enter Customer ID:
          <input type='text' required
          value={customerID} onChange={(e) => setCustomerID(e.target.value)}/>
        </label>
        <input className='cursor' type='submit' value='Get Customer'/>
      </form>
      <div className='container-a'>
        <div className='container-b'>
          <p>First Name: <strong>{customer.first_name}</strong></p>
          <p>Last Name: <strong>{customer.last_name}</strong></p>
          <p>Company: <strong>{customer.company}</strong></p>
          <p>Address: <strong>{customer.address}</strong></p>
          <p>City: <strong>{customer.city}</strong></p>
          <p>State: <strong>{customer.state}</strong></p>
        </div>
        <div className='container-b'>
          <p>Country: <strong>{customer.country}</strong></p>
          <p>Postal Code: <strong>{customer.postal_code}</strong></p>
          <p>Phone: <strong>{customer.phone}</strong></p>
          <p>Fax: <strong>{customer.fax}</strong></p>
          <p>Email: <strong>{customer.email}</strong></p>
          <p>Support Rep ID: <strong>{customer.support_rep_id}</strong></p>
        </div>
      </div>
      <retrieveContext.Provider value={customer}>
        <Create />
      </retrieveContext.Provider>
    </>
  )
}

export default Retrieve;