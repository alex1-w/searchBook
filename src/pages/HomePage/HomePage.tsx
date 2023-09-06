import styles from './HomePage.module.scss';
import BookItem from '../../components/BookItem/BookItem';
import { Skeleton } from '../../components/UI/Skeleton/Skeleton';
import { fetchBooks } from '../../store/books/booksActions';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks/reduxHooks';
import { FC, useEffect } from 'react';
import { Pagination } from '../../components/Pagination/Pagination';

const HomePage: FC = () => {
    const { books, isLoading, error } = useAppSelector((state) => state.booksData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks({ args: { searchText: 'all' } }));
    }, []);

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
        </main>
    );
};

export default HomePage;