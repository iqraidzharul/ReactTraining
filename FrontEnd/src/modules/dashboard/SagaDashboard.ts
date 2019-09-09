/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  Action,
  NOWPLAYINGENDPOINT,
  NOWPLAYINGFETCH,
} from './ConfigDashboard';
import {
  nowPlayingSuccess,
  nowPlayingFail,
} from './ActionDashboard';
import { get } from '../../utilities/StoreApi';

function* workerSagaNowPlaying(params: Action) {
  try {
    const response = yield call(get, NOWPLAYINGENDPOINT, params.data);

    if (response.status === 200 && response.data.results.length > 0) {
      yield put(nowPlayingSuccess(response.data.results));
    } else {
      yield put(nowPlayingFail(response.data.status_message));
    }
  } catch (error) {
    yield put(nowPlayingFail(error.message));
  }
}

export const watcherNowPlaying = [
  takeLatest(NOWPLAYINGFETCH, workerSagaNowPlaying),
];
