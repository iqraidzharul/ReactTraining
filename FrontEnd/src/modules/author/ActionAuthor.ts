import {
  AUTHORFETCH,
  AUTHORADD,
  AUTHORSUCESS,
  AUTHORFAIL,
  AUTHORDELETE,
} from './ConfigAuthor';

export const authorAdd = (value: object) => ({ type: AUTHORADD, data: value });
export const authorDelete = (value: object) => ({ type: AUTHORDELETE, data: value });
export const authorFetch = (value: object) => ({ type: AUTHORFETCH, data: value });
export const authorSucess = (value: object) => ({ type: AUTHORSUCESS, data: value });
export const authorFail = (value: object) => ({ type: AUTHORFAIL, data: value });
