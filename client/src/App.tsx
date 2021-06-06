import React, { useState } from 'react';
import Form from './components/Form'

function App() {
  const [bikes, setBikes] = useState([])

  function addNewBike(newBike){
    setBikes([...bikes, newBike])
  }
  return (
    <div className="App">
      <h1>Bike components</h1>
      <Form />
      {bikes.map(bike => (<div>bike.name</div>))}
    </div>
  );
}

export default App;
