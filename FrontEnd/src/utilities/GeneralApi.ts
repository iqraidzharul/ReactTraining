import axios from 'axios';

export const post = (operation: string, data: object) => axios({
  crossDomain: true,
  method: 'post',
  url: `${'http://localhost:3001/'}${operation}`,
  data: {
    ...data
  },
  validateStatus: false,
} as object);

export const get = (operation: string) => axios({
  crossDomain: true,
  method: 'get',
  url: `${'http://localhost:3001/'}${operation}`,
  validateStatus: false,
} as object);
