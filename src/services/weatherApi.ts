import axios from 'axios';

import { OPEN_WEATHER_API_URL } from 'react-native-dotenv';

export const weatherApi = axios.create({
  baseURL: OPEN_WEATHER_API_URL,
  timeout: 5000,
});
