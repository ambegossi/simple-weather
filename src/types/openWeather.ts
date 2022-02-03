export type OneCallOpenWeatherApiResponse = {
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
