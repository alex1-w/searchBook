import axios from "axios";

export const API_URL = 'https://www.googleapis.com/'
export const API_KEY = 'AIzaSyAMZwHU-s0A0sgM--5Ye_0fAXmxLuOZpec'

export const mainApi = axios.create({
    baseURL: API_URL,
})

// '/books/v1/volumes?'

// {
//     url: `/books/v1/volumes?q=${q + '&key=' + API_KEY}`,
//         method: 'GET',
//                 }