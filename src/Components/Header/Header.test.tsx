import { getByRole, render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the header', () => {
    const { getByText } = render(
        <Header/>
      );
    expect(getByText(/Weather Forecaster/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  