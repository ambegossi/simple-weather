import { Weather } from './weather';

export type City = {
  id: string;
  name: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  dailyWeatherList?: Weather[];
};
