import { fork } from 'redux-saga/effects';

import homeSaga from './src/screens/Home/saga';

export default function* rootSaga(){
  yield fork(homeSaga);
}