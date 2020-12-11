import {call, put, takeLatest} from 'redux-saga/effects';
import {getTopicsService} from '../../api';
import * as action from './action';
import * as sliceAct from './slice';

function* getTopics() {
  try {
    const data = yield call(getTopicsService);
    yield put(sliceAct.getTopicSuccess(data.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* getTopicsSaga() {
  yield takeLatest(action.getTopics, getTopics);
}
