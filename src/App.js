
import Weather from './Weather'
import './App.css'
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    
    document.body.style.backgroundColor = 'black'; 
  }, []);

  return (
    <div className='App'>
      <Weather/>
    </div>
  )
}

export default App