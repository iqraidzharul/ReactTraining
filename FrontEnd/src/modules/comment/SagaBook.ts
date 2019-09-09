import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  Action,
  BOOKENDPOINT,
  BOOKFETCH,
  BOOKADDENDPOINT,
  BOOKADD,
  BOOKDELETEENDPOINT,
  BOOKDELETE,
} from './ConfigBook';
import {
  bookSucess,
  bookFail,
} from './ActionBook';
import { get, post } from '../../utilities/GeneralApi';

function* workerSagaGetBook(params: Action) {
  try {
    const response = yield call(get, BOOKENDPOINT);

    if (response.data.statusCode === 200 && response.data.message.length > 0) {
      yield put(bookSucess(response.data.message));
    } else {
      yield put(bookFail(response.data.error));
    }
  } catch (error) {
    yield put(bookFail(error.message));
  }
}

function* workerSagaAddBook(params: Action) {
  try {
    const response = yield call(post, BOOKADDENDPOINT, params.data);

    if (response.data.statusCode === 200 && response.data.message.length > 0) {
      yield put(bookSucess(response.data.message));
    } else {
      yield put(bookFail(response.data.message));
    }
  } catch (error) {
    yield put(bookFail(error.message));
  }
}

function* workerSagaDeleteBook(params: Action) {
  try {
    const response = yield call(post, BOOKDELETEENDPOINT, params.data);

    if (response.data.statusCode === 200 && response.data.message.length > 0) {
      yield put(bookSucess(response.data.message));
    } else {
      yield put(bookFail(response.data.message));
    }
  } catch (error) {
    yield put(bookFail(error.message));
  }
}

export const watcherBook = [
  takeLatest(BOOKFETCH, workerSagaGetBook),
  takeLatest(BOOKADD, workerSagaAddBook),
  takeLatest(BOOKDELETE, workerSagaDeleteBook),
];
