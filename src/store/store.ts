import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './books/booksSlice';
import { reducer as bookReducer } from './book/bookSlice';

export const SetupStore = configureStore({
  reducer: {
    bookData: bookReducer,
    booksData: reducer,
  },
});

export type MainState = ReturnType<typeof SetupStore.getState>;
export type AppDispatch = (typeof SetupStore)['dispatch'];
