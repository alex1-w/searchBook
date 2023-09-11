import styles from './HomePage.module.scss';
import BookItem from '../../components/BookItem/BookItem';
import { Skeleton } from '../../components/UI/Skeleton/Skeleton';
import { fetchBooks } from '../../store/books/booksActions';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks/reduxHooks';
import { FC, useEffect, useState } from 'react';
import Pagination from '../../components/UI/Pagination/Pagination';

const skeletons = new Array(8).fill('');

const HomePage: FC = () => {
  const { books, isLoading } = useAppSelector((state) => state.booksData);
  const [startIndex, setStartIndex] = useState(0);
  const dispatch = useAppDispatch();

  const totalCountPages = Math.ceil(books.totalItems / 20);

  useEffect(() => {
    dispatch(
      fetchBooks({
        query: {
          text: 'all',
          orderBy: 'relevance',
          startIndex: startIndex,
        },
      }),
    );
  }, [startIndex]);

  return (
    <main className={styles.main}>
      {isLoading ? (
        <div className={styles.mainBooks__booksBlock}>
          {skeletons.map((item) => (
            <Skeleton className={styles.skeleton} key={item + 1} />
          ))}
        </div>
      ) : (
        <>
          {books?.items?.length ? (
            <div className={styles.mainBooks}>
              <p>найдено {books.totalItems} результатов</p>

              <div className={styles.mainBooks__booksBlock}>
                {books.items.map((book) => (
                  <BookItem book={book} key={book.id} />
                ))}
              </div>
            </div>
          ) : (
            <p>ничего не найдено</p>
          )}
        </>
      )}

      <Pagination pageCount={totalCountPages} setStartIndex={setStartIndex} />
    </main>
  );
};

export default HomePage;
