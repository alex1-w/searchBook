import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, mainApi } from '../../api/api';
import { IBooksResponse } from '../../types/IBooksResponse';

export const fetchBooks = createAsyncThunk('books', async ({ query }: { query: any }) => {
    // const urlParams = new URLSearchParams({ orderBy: query.filter.orderBy, subject: query.filter.category })

    const { data: books } = await mainApi.get<IBooksResponse>(`books/v1/volumes`, {
        params: {
            // 'пробелы'
            q: `${query.text} orderBy: ${query.filter.orderBy} subject: ${query.filter.category}`,
            key: API_KEY,
            startIndex: query.startIndex,
        },
    });
    console.log(query);
    return books;
});
