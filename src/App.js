import React, { Component} from "react";
import Retrieve from './components/Retrieve.jsx';
import Create from './components/Create.jsx';
import DeleteCustomer from './components/DeleteCustomer.jsx';

const App = () => {

  return(
    <div className="App">

      <p id='title'> Customer Dashboard </p>
      <h3>Note: To update a customer, first retrieve the customer then click 'Add Current Customer'.</h3>
      <Retrieve />
      <DeleteCustomer />
    </div>
  );
}

export default App;