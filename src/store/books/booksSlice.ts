import { IBooksResponse } from '../../types/IBooksResponse';
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
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<IBooksResponse>) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.books = {} as IBooksResponse;
      });
  },
});

export const { actions, reducer } = booksSlice;
