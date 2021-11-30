import React, { useState } from 'react';
import axios from 'axios';
import 'regenerator-runtime/runtime';

const DeleteCustomer = () => {

  const [customerID, setCustomerID] = useState('');
  const [message, setMessage] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: 'delete',
      url: `http://localhost:3000/customers/${customerID}`
    })
    .then( result => {
      console.log(result);
      setCustomerID('');
      setMessage(result.data);
    })
    .catch( err => {
      console.log(err.response);
    })
  }

  return (
    <>
      <h1> Delete Customer</h1>
      <p>{message}</p>
      <form className='form-style' onSubmit={(e) => handleOnSubmit(e)}>
        <label>
          Enter Customer ID:
          <input type='text' required
          value={customerID} onChange={(e) => setCustomerID(e.target.value)}/>
        </label>
        <input type='submit' value='Delete Customer'/>
      </form>
    </>
  )
}

export default DeleteCustomer;