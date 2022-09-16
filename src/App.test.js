import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const testId = screen.getByText('Hello World');
  expect(testId).toBe()
});
