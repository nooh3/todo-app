import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // 또는 해당 리듀서의 경로

const store = configureStore({
  reducer: {
    counter: counterReducer, // 또는 해당 리듀서의 슬라이스 이름
  },
});

export default store;
