import React, { Component} from "react";
import Retrieve from './components/Retrieve.jsx';
import Create from './components/Create.jsx';

const App = () => {

  return(
    <div className="App">

      <p id='title'> Customer Dashboard </p>
      <h3>Note: To update a customer, first retrieve the customer then click 'Add Retrieved Customer Info'.</h3>
      <Retrieve />
    </div>
  );
}

export default App;