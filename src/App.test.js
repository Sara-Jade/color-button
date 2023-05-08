import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import App from './App';

// // Better to getByRole than by text
// test('renders the learn React link', () => {
//   render(<App />);
//   const link = screen.getByRole('link', { name: 'Learn React'});
//   expect(link).toBeInTheDocument();
// });

test('that we can log roles', () => {
  const { container } = render(<App />);
  logRoles(container);
});

test('that the button is initially red', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });

  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('that the button initially has the text Change to blue', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });

  expect(button).toHaveTextContent('Change to blue');
});

test('that the button turns blue when clicked', () => {
  // Arrange
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });

  // Initial assert
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  // Act
  fireEvent.click(button);

  // Final assert
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
});

test('that the button text changes to Change to red when clicked', () => {
  // Arrange
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });

  // Initial assert
  expect(button).toHaveTextContent('Change to blue');

  // Act
  fireEvent.click(button);

  // Final assert
  expect(button).toHaveTextContent('Change to red');
});
