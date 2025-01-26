import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import jest-dom matchers
import Counter from './Counter';

test('increments counter on button click', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Increment/i);
  fireEvent.click(buttonElement);  // Simulate button click
  
  const counterValue = screen.getByText(/1/i);  // Verify counter value has incremented
  expect(counterValue).toBeInTheDocument();   // Assert that the value is in the document
});
