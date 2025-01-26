import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import jest-dom matchers
import DataFetcher from './DataFetcher';

// Mock the API module
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue('Mocked data'),  // Mocked data returned by the function
}));

test('displays mocked data', async () => {
  render(<DataFetcher />);  // Render the DataFetcher component
  
  const dataElement = await screen.findByText(/Mocked data/i);  // Wait for the mocked data to load
  expect(dataElement).toBeInTheDocument();  // Verify that the mocked data is displayed
});
