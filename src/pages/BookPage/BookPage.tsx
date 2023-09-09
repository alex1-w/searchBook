import styles from './BookPage.module.scss';
import { useParams } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks/reduxHooks';
import { fetchOneBook } from '../../store/book/bookActions';
import { imageResolver } from '../../helper/imageResolver';
import CategoryBlock from '../../components/CategoryBlock/CategoryBlock';
import AuthorsBlock from '../../components/AuthorsBlock/AuthorsBlock';

const BookPage: FC = () => {
  const { id } = useParams();
  const {
    isLoading,
    book: { volumeInfo, accessInfo, etag, kind, saleInfo, searchInfo, selfLink, textSnippet },
  } = useAppSelector((state) => state.bookData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOneBook({ id }));
    }
  }, [id]);

  console.log(volumeInfo);

  return (
    <main className={styles.main}>
      {!isLoading && volumeInfo ? (
        <section className={styles.bookWrapper}>
          <div className={styles.imgBlock}>
            <div className={styles.imgBlock__image}>
              <img src={volumeInfo.imageLinks?.smallThumbnail} alt={volumeInfo.title} />
            </div>
          </div>
          <div className={styles.infoBlock}>
            <CategoryBlock categories={volumeInfo.categories} style='bookPageVariant' />
            <h2>{volumeInfo.title}</h2>
            <AuthorsBlock authors={volumeInfo.authors} variant='bookPage' />

            <div className={styles.description}>
              <p dangerouslySetInnerHTML={{ __html: volumeInfo.description }}></p>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </main>
  );
};

export default BookPage;
