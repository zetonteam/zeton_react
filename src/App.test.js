import React from 'react';
import { render } from './customRender';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/wybierz podopiecznego/i);
  expect(linkElement).toBeInTheDocument();
});
