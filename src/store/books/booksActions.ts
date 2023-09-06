import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, mainApi } from '../../api/api';
import { IBooksResponse } from '../../types/IBooksRespons';




export const fetchBooks = createAsyncThunk('books', async ({ args }: { args: any }) => {
    const { data: books } = await mainApi.get<IBooksResponse>(`books/v1/volumes`, {
        params: {
            // q: `${args.searchText}`,
            // q: `${'subject:' + args.filter}` + `${args.orderBy}` + `${args.searchText}`,
            // q: args.searchText + 'subject:' + `${args.filter}`,
            // q: args.searchText + `${quer.subject}`,
            q: args.searchText + `${args}`,
            key: API_KEY,
            maxResults: 30,
        },
    });
    console.log(args);
    return books;
});
