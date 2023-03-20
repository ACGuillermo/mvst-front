import Axios from 'axios';

import { API_URL } from '@/core/config';

export const axios = Axios.create({
  baseURL: API_URL,
});
