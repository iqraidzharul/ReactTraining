import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  Action,
  CATEGORYENDPOINT,
  CATEGORYFETCH,
  CATEGORYADDENDPOINT,
  CATEGORYADD,
  CATEGORYDELETEENDPOINT,
  CATEGORYDELETE,
} from './ConfigCategory';
import {
  categorySucess,
  categoryFail,
} from './ActionCategory';
import { get, post } from '../../utilities/GeneralApi';

function* workerSagaGetCATEGORY(params: Action) {
  try {
    const response = yield call(get, CATEGORYENDPOINT);

    if (response.data.statusCode === 200 && response.data.message.length > 0) {
      yield put(categorySucess(response.data.message));
    } else {
      yield put(categoryFail(response.data.error));
    }
  } catch (error) {
    yield put(categoryFail(error.message));
  }
}

function* workerSagaAddCategory(params: Action) {
  try {
    const response = yield call(post, CATEGORYADDENDPOINT, params.data);

    if (response.data.statusCode === 200 && response.data.message.length > 0) {
      yield put(categorySucess(response.data.message));
    } else {
      yield put(categoryFail(response.data.message));
    }
  } catch (error) {
    yield put(categoryFail(error.message));
  }
}

function* workerSagaDeleteCategory(params: Action) {
  try {
    const response = yield call(post, CATEGORYDELETEENDPOINT, params.data);

    if (response.data.statusCode === 200 && response.data.message.length > 0) {
      yield put(categorySucess(response.data.message));
    } else {
      yield put(categoryFail(response.data.message));
    }
  } catch (error) {
    yield put(categoryFail(error.message));
  }
}

export const watcherCategory = [
  takeLatest(CATEGORYFETCH, workerSagaGetCATEGORY),
  takeLatest(CATEGORYADD, workerSagaAddCategory),
  takeLatest(CATEGORYDELETE, workerSagaDeleteCategory),
];
