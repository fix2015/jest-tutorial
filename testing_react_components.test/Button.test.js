import React from 'react'; // Import React for JSX
import { render, screen, fireEvent } from '@testing-library/react'; // Import necessary functions
import '@testing-library/jest-dom'; // Import jest-dom for custom matchers
import Button from './Button';

test('renders button with correct label', () => {
  render(<Button label="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument(); // This now works after importing jest-dom
});

test('button click triggers event', () => {
  const handleClick = jest.fn(); // Mock function for click event
  render(<Button label="Click me" onClick={handleClick} />);
  
  const buttonElement = screen.getByText(/Click me/i);
  fireEvent.click(buttonElement); // Simulate button click
  
  expect(handleClick).toHaveBeenCalledTimes(1); // Check if the click handler was called
});
