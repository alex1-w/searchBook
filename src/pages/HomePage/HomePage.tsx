import styles from './HomePage.module.scss';
import BookItem from '../../components/BookItem/BookItem';
import { Skeleton } from '../../components/UI/Skeleton/Skeleton';
import { fetchBooks } from '../../store/books/booksActions';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks/reduxHooks';
import { FC, useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';

const HomePage: FC = () => {
  const { books, isLoading } = useAppSelector((state) => state.booksData);
  const [startIndex, setStartIndex] = useState(0);
  const dispatch = useAppDispatch();

  const totalCountPages = Math.ceil(books.totalItems / 10);

  useEffect(() => {
    dispatch(
      fetchBooks({
        query: {
          text: 'all',
          filter: { orderBy: 'newest', category: 'all' },
          startIndex: startIndex,
        },
      }),
    );
  }, [startIndex]);

  return (
    <main className={styles.main}>
      {isLoading ? (
        <div className={styles.booksBlock}>
          <Skeleton className={styles.skeleton} />
          <Skeleton className={styles.skeleton} />
          <Skeleton className={styles.skeleton} />
          <Skeleton className={styles.skeleton} />
          <Skeleton className={styles.skeleton} />
          <Skeleton className={styles.skeleton} />
          <Skeleton className={styles.skeleton} />
          <Skeleton className={styles.skeleton} />
          <Skeleton className={styles.skeleton} />
        </div>
      ) : (
        <>
          {books?.items?.length ? (
            <div className={styles.booksBlock}>
              {books.items.map((book) => (
                <BookItem book={book} key={book.id} />
              ))}
            </div>
          ) : (
            <p>ничего не найдено</p>
          )}
        </>
      )}

      <Pagination
        isAllowPaginate={Boolean(books.items && !isLoading)}
        setStartIndex={setStartIndex}
        totalCountPages={totalCountPages}
      />
    </main>
  );
};

export default HomePage;
