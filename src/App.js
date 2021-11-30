import React, { Component} from "react";
import Retrieve from './components/Retrieve.jsx';
import Create from './components/Create.jsx';
import DeleteCustomer from './components/DeleteCustomer.jsx';

const App = () => {

  return(
    <div className="App">

      <h1> Customer Dashboard </h1>
      <Retrieve />
      <Create />
      <DeleteCustomer />
    </div>
  );
}

export default App;