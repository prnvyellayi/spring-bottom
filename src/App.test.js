import { render, screen } from '@testing-library/react';
import App from './App';
import BottomSheet from './components/bottomsheet'

test('renders learn react link', () => {
  render(<BottomSheet />);
  const linkElement = screen.getByText(/content/i);
  expect(linkElement).toBeInTheDocument();
});
