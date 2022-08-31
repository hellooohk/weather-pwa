import { render, screen } from '@testing-library/react';
import {Characterstics} from './Characterstics';

test('renders the landing page', () => {
  render(<Characterstics time={"09:34AM"} pressure={"1000"} rainPercent={'58%'} humidity={"50"} />);
//   expect(screen.getByRole('img')).toHaveAttribute('src', 'assets/landing.svg');
    expect(screen.getByText("09:34AM")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText("58%")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();

});