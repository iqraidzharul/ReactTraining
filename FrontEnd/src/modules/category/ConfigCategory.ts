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

export const CATEGORYENDPOINT = 'category';
export const CATEGORYADDENDPOINT = 'category/add';
export const CATEGORYDELETEENDPOINT = 'category/delete';
export const CATEGORYFETCH = 'CATEGORYFETCH';
export const CATEGORYSUCESS = 'CATEGORYSUCESS';
export const CATEGORYFAIL = 'CATEGORYFAIL';
export const CATEGORYADD = 'CATEGORYADD';
export const CATEGORYDELETE = 'CATEGORYDELETE';
