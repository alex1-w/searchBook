import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, mainApi } from '../../api/api';
import { IBooksResponse } from '../../types/IBooksResponse';
import { queryResolver } from '../../helper/queryResolver';

interface IQuery {
    text?: string;
    category?: string;
    orderBy?: string;
    startIndex?: number
}

export const fetchBooks = createAsyncThunk('books', async ({ query }: { query: IQuery }) => {

    console.log(query)

    const { data: books } = await mainApi.get<IBooksResponse>(`books/v1/volumes`, {
        params: {
            q:  queryResolver(query.category, query.text),
            // q: query.text ? query.text : 'all' + `&subject: ${query.category ? query.category : 'all'}`,
            orderBy: `${query.orderBy ? query.orderBy : 'newest'}`,
            key: API_KEY,
            startIndex: query.startIndex,
            maxResults: 20
        },
    });
    return books;
});
