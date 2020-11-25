import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getDataSuccess: (state, action) => {
      return {...state, data: action.payload};
    },
  },
});

export const {getDataSuccess} = slice.actions;
export default slice.reducer;
