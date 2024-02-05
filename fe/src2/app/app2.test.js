// src/app/App.test.js

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders data items', () => {
  const { getByText } = render(<App />);
  const item1 = getByText(/Item 1/i);
  const item2 = getByText(/Item 2/i);
  const item3 = getByText(/Item 3/i);
  expect(item1).toBeInTheDocument();
  expect(item2).toBeInTheDocument();
  expect(item3).toBeInTheDocument();
});
