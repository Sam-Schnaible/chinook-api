import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Retrieve = () => {

  const [customer, setCustomer] = useState(;);
  const [customerID, setCustomerID] = useState('');

  return (
    <>
      <form className='form-style' onSubmit={(e) => handleOnSubmit(e)}>
        <label>
          Enter Customer ID:
          <input type='text' required
          value={customerID} onChange={(e) => setInput(e.target.value)}/>
        </label>
        <input type='submit' value='Get Customer'/>
      </form>
    <button onClick={() => getCustomer()}>Get Customer</button>
    <p>{customer.first_name}</p>
    </>
  )
}

export default Retrieve;