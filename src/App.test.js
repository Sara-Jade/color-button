import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Better to getByRole than by text
test('renders the learn React link', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: 'Learn React'});
  expect(link).toBeInTheDocument();
});
