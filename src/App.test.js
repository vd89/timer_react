import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const testId = screen.getByTestId('typography');
  expect(testId).toBe('Hello World');
});
