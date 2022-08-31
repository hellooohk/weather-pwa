import { render, screen } from '@testing-library/react';
import Weather from './Weather';

test('renders the weather', () => {
  const url = "https://openweathermap.org/img/wn/10d@2x.png";
  const temperature = "300.15";
  const city = "Agra"
  render(<Weather city={city} imgUrl={url} temperature={temperature}/>);
  expect(screen.getByAltText('weather-icon')).toBeInTheDocument();
  expect(screen.getByAltText('arrow')).toBeInTheDocument();
  expect(screen.getByText(city)).toBeInTheDocument();
  expect(screen.getByText(temperature)).toBeInTheDocument();
});