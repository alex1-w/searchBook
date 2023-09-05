import { IBooksResponse } from './../../types/IBooksRespons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from './booksActions';
// import { fetchBooks } from './booksActions'

export interface IBooksState {
  isLoading: boolean;
  error: null | string;
  books: IBooksResponse;
}

const initialState: IBooksState = {
  books: {} as IBooksResponse,
  error: null,
  isLoading: false,
};

export const booksSlice = createSlice({
  initialState,
  name: 'booksData',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        console.log('pending');
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<IBooksResponse>) => {
        console.log('fulfilled');
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        console.log('error');
        state.isLoading = false;
        state.books = {} as IBooksResponse;
      });
  },
});

export const { actions, reducer } = booksSlice;
