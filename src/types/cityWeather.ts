export type CityWeatherApiResponse = {
  daily: {
    temp: {
      day: number;
      min: number;
      max: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }[];
};
