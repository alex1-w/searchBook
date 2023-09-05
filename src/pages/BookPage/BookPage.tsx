import styles from './BookPage.module.scss';
import { useParams } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { fetchBooks } from '../../store/books/booksActions';
import { API_KEY, mainApi } from '../../api/api';
// 'https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey'

const BookPage: FC = () => {
  const { id } = useParams();
  console.log(id);

  const getBook = async () => {
    const { data } = await mainApi.get(`books/v1/volumes/${id}`, {
      params: {
        key: API_KEY,
      },
    });
    return console.log(data);
  };

  useEffect(() => {
    if (id) {
      getBook();
    }
  }, [id]);

  return <main></main>;
};

export default BookPage;
