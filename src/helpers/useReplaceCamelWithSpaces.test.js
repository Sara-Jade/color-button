import { useReplaceCamelWithSpaces } from "./useReplaceCamelWithSpaces";

describe('useReplaceCamelWithSpaces', () => {
  test('that it works for no inner capital letters', () => {
    expect(useReplaceCamelWithSpaces('Red')).toBe('Red');
  });
    
  test('that it works for one inner captial letter', () => {
    expect(useReplaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
    
  test('that it works for multiple inner captial letters', () => {
    expect(useReplaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
