export type City = {
  id: string;
  name: string;
  state: string;
  country: string;
  weather?: {
    temp: number;
    temp_min: number;
    temp_max: number;
    icon: string;
    description: string;
  };
};
