import styles from './BookItem.module.scss';
import { imageResolver } from '../../helper/imageResolver';
import { IBook } from '../../types/IBooksResponse';
import { FC } from 'react';
import CategoryBlock from '../CategoryBlock/CategoryBlock';
import AuthorsBlock from '../AuthorsBlock/AuthorsBlock';
import { Link } from 'react-router-dom';

const BookItem: FC<{ book: IBook }> = ({
  book: { accessInfo, etag, id, kind, saleInfo, searchInfo, selfLink, textSnippet, volumeInfo },
}) => {
  return (
    <Link className={styles.main} to={`book/${id}`}>
      <div className={styles.imgBlock}>
        <img src={imageResolver(volumeInfo)} alt='' />
      </div>

      <div className={styles.descriptionBlock}>
        <CategoryBlock categories={volumeInfo.categories} style='mini' />
        <h5>{volumeInfo.title}</h5>

        <AuthorsBlock authors={volumeInfo.authors} variant='bookMini' />
      </div>
    </Link>
  );
};

export default BookItem;
