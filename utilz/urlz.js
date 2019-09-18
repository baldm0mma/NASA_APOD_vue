import { firstDayOfMonth, currentDayOfMonth } from './dates';
const API_KEY = process.env.VUE_APP_API_KEY;

export const fullMonthUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${firstDayOfMonth}&end_date=${currentDayOfMonth}`;

export const specificDateUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=`;
