export type Weather = {
  temp: number;
  tempMin: number;
  tempMax: number;
  icon: string;
  weatherDescription: string;
};

export type DailyWeather = Weather & {
  day: string;
  date: string;
};
