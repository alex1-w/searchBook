import { IBook, IBooksResponse } from '../../types/IBooksResponse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOneBook } from './bookActions';
// import { fetchBooks } from './booksActions'

export interface IBooksState {
  isLoading: boolean;
  error: null | string;
  book: IBook;
}

const initialState: IBooksState = {
  book: {} as IBook,
  error: null,
  isLoading: false,
};

export const bookSlice = createSlice({
  initialState,
  name: 'booksData',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOneBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.book = action.payload;
      })
      .addCase(fetchOneBook.rejected, (state) => {
        state.isLoading = false;
        state.book = {} as IBook;
      });
  },
});

export const { actions, reducer } = bookSlice;
