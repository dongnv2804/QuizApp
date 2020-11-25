import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from './action';
import * as slice from './slice';

function* getData({payload}) {
  try {
    yield put(slice.getDataSuccess(payload)); // doc toolkit de hieu tai sao lai put them 1 action nhe
  } catch (error) {
    console.log(error);
  }
}

export default function* homeSaga() {
  yield takeLatest(action.getData, getData);
}
