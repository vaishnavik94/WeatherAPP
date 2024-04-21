import React from 'react';
import './App.css';
import bgpost from './components/bgpost';
import sample  from './components/sample';
import DisplayWeather from './components/DisplayWeather';

function App() {
  return (
    <div className="App">
      <DisplayWeather/>
      <bgpost/>
    </div>
  );
}

export default App;
