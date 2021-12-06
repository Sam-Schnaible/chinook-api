import React, { useState } from 'react';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import { retrieveContext} from './Retrieve.jsx';
import { initialRange } from '../App.js';

const Create = () => {

  const context= React.useContext(retrieveContext);
  const rangeContext = React.useContext(initialRange)
  const customerID = context.id;
  const getRange = rangeContext.getRange;

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

  const [requestData, setRequestData ] = useState(
    {
      method: '',
      id: ''
    }
  );

  const upDate = () => {

    setCustomer({
      firstName: context.first_name,
      lastName: context.last_name,
      company: context.company || '',
      address: context.address || '',
      city: context.city || '',
      state: context.state || '',
      country: context.country || '',
      postalCode: context.postal_code || '',
      phone: context.phone || '',
      fax: context.fax || '',
      email: context.email || '',
      supportRepID: context.support_rep_id || ''
    });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: requestData.method,
      url: `http://localhost:3000/customers/${requestData.id}`,
      data: {
        first_name: customer.firstName,
        last_name: customer.lastName,
        company: customer.company,
        address: customer.address,
        city: customer.city,
        state: customer.state,
        country: customer.country,
        postal_code: customer.postalCode,
        phone: customer.phone,
        fax: customer.fax,
        email: customer.email,
        support_rep_id: customer.supportRepID || 2
      }
    })
    .then( result => {
      let action = requestData.method === 'post' ? 'Customer has been successfully added!'
      : 'Customer has been successfully updated!';
      setCustomer({
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
      alert(action);
      getRange();
    })
    .catch( err => {
      console.log(err.response);
    })
  }

  return (
    <>
      <h1>Create Or Update Customer</h1>
      <button className='cursor' onClick={()=> upDate() }>Add Retrieved Customer Info</button>
      <div className='container-a form-a'>
        <form className='form-style container-form' onSubmit={(e) => handleOnSubmit(e)}>
        <div className='container-c'>
          <label>
            First Name:
            <input type='text' required
            value={customer.firstName} onChange={(e) => setCustomer({...customer, firstName: e.target.value})}/>
          </label>
          <label>
            Last Name:
            <input type='text' required
            value={customer.lastName} onChange={(e) => setCustomer({...customer, lastName: e.target.value})}/>
          </label>
          <label>
            Company:
            <input type='text'
            value={customer.company} onChange={(e) => setCustomer({...customer, company: e.target.value})}/>
          </label>
          <label>
            Address:
            <input type='text'
            value={customer.address} onChange={(e) => setCustomer({...customer, address: e.target.value})}/>
          </label>
          <label>
            City:
            <input type='text'
            value={customer.city} onChange={(e) => setCustomer({...customer, city: e.target.value})}/>
          </label>
          <label>
            State:
            <input type='text'
            value={customer.state} onChange={(e) => setCustomer({...customer, state: e.target.value})}/>
          </label>
          </div>
          <div className='container-c'>
          <label>
            Country:
            <input type='text'
            value={customer.country} onChange={(e) => setCustomer({...customer, country: e.target.value})}/>
          </label>
          <label>
            Postal Code:
            <input type='text'
            value={customer.postalCode} onChange={(e) => setCustomer({...customer, postalCode: e.target.value})}/>
          </label>
          <label>
            Phone:
            <input type='text'
            value={customer.phone} onChange={(e) => setCustomer({...customer, phone: e.target.value})}/>
          </label>
          <label>
            Fax:
            <input type='text'
            value={customer.fax} onChange={(e) => setCustomer({...customer, fax: e.target.value})}/>
          </label>
          <label>
            Email:
            <input type='email' required
            value={customer.email} onChange={(e) => setCustomer({...customer, email: e.target.value})}/>
          </label>
          <label>
            Support Rep ID:
            <input type='text'
            value={customer.supportRepID} onChange={(e) => setCustomer({...customer, supportRepID: e.target.value})}/>
          </label>
          <p>*Support Rep ID Range: 1 - 8</p>
          </div>
          <input className='submit-btn cursor' type='submit' value='Add Customer'
          onClick={() => setRequestData({method: 'post', id: ''})}
          />
          <input className='submit-btn cursor' type='submit' value='Update Customer'
          onClick={() => setRequestData({method: 'put', id: customerID})}
          />
        </form>
      </div>
    </>
  )
}

export default Create;