import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero name', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /aditya tripathi/i });
  expect(heading).toBeInTheDocument();
});
