import { Weather } from './weather';

export type City = {
  id: string | number[];
  name: string;
  state: string;
  country: string;
};

export type WeatherCity = Weather & City;
