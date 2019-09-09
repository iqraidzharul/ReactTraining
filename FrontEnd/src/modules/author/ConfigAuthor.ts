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

export const AUTHORENDPOINT = 'author';
export const AUTHORADDENDPOINT = 'author/add';
export const AUTHORDELETEENDPOINT = 'author/delete';
export const AUTHORFETCH = 'AUTHORFETCH';
export const AUTHORSUCESS = 'AUTHORSUCESS';
export const AUTHORFAIL = 'AUTHORFAIL';
export const AUTHORADD = 'AUTHORADD';
export const AUTHORDELETE = 'AUTHORDELETE';
