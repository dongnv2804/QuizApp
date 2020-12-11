import {call, put, takeLatest} from 'redux-saga/effects';
import * as action from './action';
import * as sliceAct from './slice';
import {getQuestionsByTopic, getResultService} from '../../api';

function* getQuestions({payload}) {
  try {
    const {topicId} = payload;
    const res = yield call(getQuestionsByTopic, {topicId: topicId});
    yield put(sliceAct.getQuestionsSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* addDataAnswer({payload}) {
  try {
    yield put(sliceAct.addDataAnswerSuccess(payload));
  } catch (error) {
    console.log(error);
  }
}

function* getResult({payload}) {
  try {
    const data = yield call(getResultService, payload);
    console.log(data);
    yield put(sliceAct.getResultSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* getQuestionsSaga() {
  yield takeLatest(action.getQuestions, getQuestions);
  yield takeLatest(action.addDataAnswer, addDataAnswer);
  yield takeLatest(action.getResult, getResult);
}
