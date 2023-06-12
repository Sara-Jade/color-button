import './App.css';
import { useState } from 'react';
import { useReplaceCamelWithSpaces } from './helpers/useReplaceCamelWithSpaces';

function App() {
  const [buttonColor, toggleButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [isChecked, toggleChecked] = useState(false);
  const [isDisabled, toggleDisableButton] = useState(false);

  useReplaceCamelWithSpaces(colorName);

  return (
    <div>
      <button 
        style={{backgroundColor: isDisabled ? 'gray' : buttonColor }}
        onClick={() => toggleButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <label htmlFor='my-checkbox'>Disable button</label>
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
      <button className='myButton'>Next</button>
    </div>
  );
}

export default App;
