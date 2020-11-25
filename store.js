import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import homeReducer from './src/screens/Home/slice';
import rootSaga from './saga';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: [
    ...getDefaultMiddleware({thunk: false, serializableCheck: false}),
    sagaMiddleWare,
  ],
});

sagaMiddleWare.run(rootSaga);

export default store;
