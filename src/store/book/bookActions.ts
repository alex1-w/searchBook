import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, mainApi } from '../../api/api';
import { IBook, IBooksResponse } from '../../types/IBooksResponse';

// export const fetchOneBook = createAsyncThunk('books', async ({ id }: { id: string }) => {
export const fetchOneBook = createAsyncThunk('book', async ({ id }: { id: string }) => {
  const { data } = await mainApi.get<IBook>(`books/v1/volumes/${id}`, {
    params: {
      key: API_KEY,
    },
  });

  return data;
});
