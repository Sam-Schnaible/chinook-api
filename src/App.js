import React, { Component, useState, useEffect } from "react";
import Retrieve from './components/Retrieve.jsx';
import Create from './components/Create.jsx';
import axios from 'axios';

export const initialRange = React.createContext();

const App = () => {

  const [range, setRange] = useState({
    rangeMin: '',
    rangeMax: '',
    getRange: async () => {
      await axios({
        method: 'get',
        url: 'http://localhost:3000/customers'
      })
      .then( result => {
        setRange({...range, rangeMin: result.data[0].min, rangeMax: result.data[0].max});
      })
      .catch( err => {
        console.log(err);
      })
    }
  })

  useEffect(() => {
    range.getRange();
  }, [])
  return(
    <div className="App">

      <p id='title'> Customer Dashboard </p>
      <h3>Note: To update a customer, first retrieve the customer then click 'Add Retrieved Customer Info'.</h3>
      <initialRange.Provider value={range}>
        <Retrieve />
      </initialRange.Provider>
    </div>
  );
}

export default App;