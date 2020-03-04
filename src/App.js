import React from 'react';
import './App.css';
import PersonCardComponents from './components/PersonCardComponents';

function App() {
  return (
    <div className="App">
      <PersonCardComponents firstName="Isaac" lastname="Vega" Age={25} hairColor="black"/>
      <PersonCardComponents firstName="Vincent" lastname="Pulsen" Age={25} hairColor="brown"/>
      <PersonCardComponents firstName="Carlos" lastname="Vela" Age={30} hairColor="pink"/>
      <PersonCardComponents firstName="Christian" lastname="Pulisic" Age={20} hairColor="red"/>
    </div>
  );
}

export default App;
