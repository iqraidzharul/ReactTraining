export interface State {
  fetch: boolean,
  data: any,
  res: any,
  err: any,
}

export interface Action {
  type: string,
  data: any,
}

export const initialState = {
  fetch: false,
  data: null,
  res: null,
  err: null,
};

export const initialAction = {
  type: 'DEFAULT',
  data: null,
};

export const BOOKENDPOINT = 'book';
export const BOOKADDENDPOINT = 'book/add';
export const BOOKDELETEENDPOINT = 'book/delete';
export const BOOKFETCH = 'BOOKFETCH';
export const BOOKSUCESS = 'BOOKSUCESS';
export const BOOKFAIL = 'BOOKFAIL';
export const BOOKADD = 'BOOKADD';
export const BOOKDELETE = 'BOOKDELETE';
