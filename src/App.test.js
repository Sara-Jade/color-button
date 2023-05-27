import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import App from './App';
// Need to install another library if using toHaveStyle() from imported module.

test('that the Next button has a green background and appropriate text', () => {
  render(<App />);
  const nextButton = screen.getByRole('button', { name: 'Next' });

  // toHaveStyle() vs. imported CSS doesn't work, even with jest-css-transform or jest-css-modules-transform
  // expect(nextButton).toHaveStyle({ backgroundColor: 'green' });

  expect(nextButton).toHaveTextContent('Next');
});

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

test('that the button is initially enabled', () => {
  // Arrange
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });

  // Assert
  expect(button).toBeEnabled();
});

test('that the checkbox is initially unchecked', () => {
  // Arrange
  render(<App />);
  const checkbox = screen.getByRole('checkbox');

  // Assert
  expect(checkbox).not.toBeChecked();
});

test('that the checkbox is intially enabled', () => {
  // Arrange
  render(<App />);
  const checkbox = screen.getByRole('checkbox');

  // Assert
  expect(checkbox).toBeEnabled();
});

test('that checking the checkbox disables the Change to blue/red button', () => {
  // Arrange
  render(<App />);
  const changeToColorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  // Pre-act assert
  expect(changeToColorButton).toBeEnabled();
  expect(checkbox).toBeEnabled();
  expect(checkbox).not.toBeChecked();

  // Act
  fireEvent.click(checkbox);

  // Assert
  expect(checkbox).toBeChecked();
  expect(changeToColorButton).toBeDisabled();
});

test('that checking the checkbox twice first disables and then re-enables the Change to red/blue button', () => {
    // Arrange
    render(<App />);
    const changeToColorButton = screen.getByRole('button', { name: 'Change to blue' });
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  
    // Initial assert
    expect(changeToColorButton).toBeEnabled();
    expect(checkbox).toBeEnabled();
    expect(checkbox).not.toBeChecked();
  
    // Act
    fireEvent.click(checkbox);
  
    // 2nd assert
    expect(checkbox).toBeChecked();
    expect(changeToColorButton).toBeDisabled();

    // Act
    fireEvent.click(checkbox);

    // Final assert
    expect(checkbox).not.toBeChecked();
    expect(changeToColorButton).toBeEnabled();
});