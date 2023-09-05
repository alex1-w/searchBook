import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './books/booksSlice';

export const SetupStore = configureStore({
  reducer: {
    booksData: reducer,
  },
});

export type MainState = ReturnType<typeof SetupStore.getState>;
export type AppDispatch = (typeof SetupStore)['dispatch'];
