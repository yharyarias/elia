import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('La página renderiza bien: ', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ELIA/i);
  expect(linkElement).toBeInTheDocument();
});
