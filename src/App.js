import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, toggleButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [isChecked, toggleChecked] = useState(false);

  return (
    <div>
      <button 
        style={{ backgroundColor: buttonColor }}
        onClick={() => toggleButtonColor(newButtonColor)}
        enabled
      >
        Change to {newButtonColor}
      </button>
      <input 
        type='checkbox' 
        value='isChecked'
        onClick={() => toggleChecked(!isChecked)}
      />
      <button className='myButton'>Next</button>
    </div>
  );
}

export default App;
