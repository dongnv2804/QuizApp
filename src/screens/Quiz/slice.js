import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  questions: [],
  dataquestion: [],
  result: {
    score: 0,
    countCorrect: 0,
  },
};

const slice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    getQuestionsSuccess: (state, action) => {
      return {...state, questions: action.payload};
    },
    addDataAnswerSuccess: (state, action) => {
      const arr = [];
      arr.push(action.payload);
      return {...state, dataquestion: [...state.dataquestion, ...arr]};
    },
    getResultSuccess: (state, action) => {
      return {...state, result: action.payload};
    },
  },
});

export const {
  getQuestionsSuccess,
  addDataAnswerSuccess,
  getResultSuccess,
} = slice.actions;
export default slice.reducer;
