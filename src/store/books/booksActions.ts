import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, mainApi } from '../../api/api';
import { IBooksResponse } from '../../types/IBooksRespons';

export const fetchBooks = createAsyncThunk('books', async ({ query, filterParam }: { query: string, filterParam?: string }) => {
    const { data: books } = await mainApi.get<IBooksResponse>(`books/v1/volumes`, {
        params: {
            q: query,
            key: API_KEY,
            maxResults: 30,
            filter: filterParam,
        },
    });
    return books;
});
