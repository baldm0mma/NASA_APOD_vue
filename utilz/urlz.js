import { firstDayOfMonth, currentDayOfMonth } from './dates';
import { API_KEY } from '../apiKey';
console.log('api', API_KEY)

export const fullMonthUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${firstDayOfMonth}&end_date=${currentDayOfMonth}`;

export const specificDateUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=`;
