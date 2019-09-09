/**
 * @author: dwi.setiyadi@gmail.com
*/

import axios from 'axios';
import { APIUri, APIKey } from '../config';

export const post = (operation: string, data: object) => axios({
  crossDomain: true,
  method: 'post',
  url: `${APIUri}${operation}`,
  data: {
    ...data,
    api_key: APIKey,
  },
  validateStatus: false,
} as object);

export const get = (operation: string, data: object) => axios({
  crossDomain: true,
  method: 'get',
  url: `${APIUri}${operation}`,
  params: {
    ...data,
    api_key: APIKey,
  },
  validateStatus: false,
} as object);
