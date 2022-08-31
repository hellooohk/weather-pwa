import { render, screen } from '@testing-library/react';
import KeyValueCard from './KeyValueCard';

test('renders the KeyValueCard', () => {
  render(<KeyValueCard title={'key'} value={'value'} />);
  expect(screen.getByText('key')).toBeInTheDocument();
  expect(screen.getByText('value')).toBeInTheDocument();
});