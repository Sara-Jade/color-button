import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, toggleButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <button 
      style={{ backgroundColor: buttonColor }}
      onClick={() => toggleButtonColor(newButtonColor)}
    >
      Change to {newButtonColor}
    </button>
  );
}

export default App;
