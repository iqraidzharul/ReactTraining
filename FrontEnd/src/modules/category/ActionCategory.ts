import {
  CATEGORYFETCH,
  CATEGORYADD,
  CATEGORYSUCESS,
  CATEGORYFAIL,
  CATEGORYDELETE,
} from './ConfigCategory';

export const categoryAdd = (value: object) => ({ type: CATEGORYADD, data: value });
export const categoryDelete = (value: object) => ({ type: CATEGORYDELETE, data: value });
export const categoryFetch = (value: object) => ({ type: CATEGORYFETCH, data: value });
export const categorySucess = (value: object) => ({ type: CATEGORYSUCESS, data: value });
export const categoryFail = (value: object) => ({ type: CATEGORYFAIL, data: value });
