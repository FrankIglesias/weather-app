import { ApiResponse } from 'apisauce';

import api from '../config/api';

export const getForecast = (city: string): Promise<ApiResponse<any>> => api.get('/forecast', { city });
