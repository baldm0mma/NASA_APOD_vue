import { firstDayOfMonth, currentDayOfMonth } from './dates';

export const fullMonthUrl = `https://api.nasa.gov/planetary/apod?api_key=xq8X0pOCNVMqXK51BwoSsRDkjE5Z4vGDdIxH83re&start_date=${firstDayOfMonth}&end_date=${currentDayOfMonth}`;