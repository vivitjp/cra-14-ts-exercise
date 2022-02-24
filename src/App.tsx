import React from 'react';
import './App.css';
import getValue from './Exercise'

function App() {

  const value = getValue(2, 3);

  return (
    <div className="App">
      {value.toString()}
    </div>
  );
}

export default App;