import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, toggleButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [isChecked, toggleChecked] = useState(false);
  const [isDisabled, toggleDisableButton] = useState(false);

  return (
    <div>
      <button 
        style={{ backgroundColor: buttonColor }}
        onClick={() => toggleButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        id='my-checkbox'
        type='checkbox' 
        value='isChecked'
        onClick={
          () => {
            toggleChecked(!isChecked);
            toggleDisableButton(!isChecked);
          }
        }
      />
      <label htmlFor='my-checkbox'>Disable button</label>
      <button className='myButton'>Next</button>
    </div>
  );
}

export default App;
