import {fork} from 'redux-saga/effects';

import homeSaga from './src/screens/Home/saga';
import topicSaga from './src/screens/Topic/saga';
import quizSaga from './src/screens/Quiz/saga';

export default function* rootSaga() {
  yield fork(homeSaga);
  yield fork(topicSaga);
  yield fork(quizSaga);
}
