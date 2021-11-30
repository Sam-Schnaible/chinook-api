import React, { Component} from "react";
import Retrieve from './components/Retrieve.jsx';
import Create from './components/Create.jsx';

const App = () => {

  return(
    <div className="App">

      <h1> Hello, World! </h1>
      <Retrieve />
      <Create />
    </div>
  );
}

export default App;