import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  Action,
  AUTHORENDPOINT,
  AUTHORFETCH,
  AUTHORADDENDPOINT,
  AUTHORADD,
  AUTHORDELETEENDPOINT,
  AUTHORDELETE,
} from './ConfigAuthor';
import {
  authorSucess,
  authorFail,
} from './ActionAuthor';
import { get, post } from '../../utilities/GeneralApi';

function* workerSagaGetAUTHOR(params: Action) {
  try {
    const response = yield call(get, AUTHORENDPOINT);

    if (response.data.statusCode === 200 && response.data.message.length > 0) {
      yield put(authorSucess(response.data.message));
    } else {
      yield put(authorFail(response.data.error));
    }
  } catch (error) {
    yield put(authorFail(error.message));
  }
}

function* workerSagaAddAUTHOR(params: Action) {
  try {
    const response = yield call(post, AUTHORADDENDPOINT, params.data);

    if (response.data.statusCode === 200 && response.data.message.length > 0) {
      yield put(authorSucess(response.data.message));
    } else {
      yield put(authorFail(response.data.message));
    }
  } catch (error) {
    yield put(authorFail(error.message));
  }
}

function* workerSagaDeleteAUTHOR(params: Action) {
  try {
    const response = yield call(post, AUTHORDELETEENDPOINT, params.data);

    if (response.data.statusCode === 200 && response.data.message.length > 0) {
      yield put(authorSucess(response.data.message));
    } else {
      yield put(authorFail(response.data.message));
    }
  } catch (error) {
    yield put(authorFail(error.message));
  }
}

export const watcherAuthor = [
  takeLatest(AUTHORFETCH, workerSagaGetAUTHOR),
  takeLatest(AUTHORADD, workerSagaAddAUTHOR),
  takeLatest(AUTHORDELETE, workerSagaDeleteAUTHOR),
];
