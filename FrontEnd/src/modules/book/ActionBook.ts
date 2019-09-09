import {
  BOOKFETCH,
  BOOKADD,
  BOOKSUCESS,
  BOOKFAIL,
  BOOKDELETE,
} from './ConfigBook';

export const bookAdd = (value: object) => ({ type: BOOKADD, data: value });
export const bookDelete = (value: object) => ({ type: BOOKDELETE, data: value });
export const bookFetch = (value: object) => ({ type: BOOKFETCH, data: value });
export const bookSucess = (value: object) => ({ type: BOOKSUCESS, data: value });
export const bookFail = (value: object) => ({ type: BOOKFAIL, data: value });
