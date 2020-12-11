import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  topics: [],
};

const slice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    getTopicSuccess: (state, action) => {
      return {...state, topics: action.payload};
    },
  },
});

export const {getTopicSuccess} = slice.actions;
export default slice.reducer;
