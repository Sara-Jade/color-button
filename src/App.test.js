import { render, screen } from '@testing-library/react';
import App from './App';

// // Better to getByRole than by text
// test('renders the learn React link', () => {
//   render(<App />);
//   const link = screen.getByRole('link', { name: 'Learn React'});
//   expect(link).toBeInTheDocument();
// });

test('that the button is initially red', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });

  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('that the button initially has the text Change to blue', () => {

});

test('that the button turns blue when clicked', () => {

});

test('that the button text changes to Change to red when clicked', () => {

});
