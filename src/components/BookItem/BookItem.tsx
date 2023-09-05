import styles from './BookItem.module.scss';
import { getImage } from '../../helper/imageResolver';
import { IBook } from '../../types/IBooksRespons';
import { FC } from 'react';
import CategoryBlock from './components/CategoryBlock/CategoryBlock';
import AuthorsBlock from './components/AuthorsBlock/AuthorsBlock';
import { Link } from 'react-router-dom';

const BookItem: FC<{ book: IBook }> = ({
  book: { accessInfo, etag, id, kind, saleInfo, searchInfo, selfLink, textSnippet, volumeInfo },
}) => {

  return (
    <Link className={styles.main} to={`/:${id}`}>
      <div className={styles.imgBlock}>
        <img src={getImage(volumeInfo)} alt='' />
      </div>

      <div className={styles.descriptionBlock}>
        <CategoryBlock categories={volumeInfo.categories} />
        <h5>{volumeInfo.title}</h5>

        <AuthorsBlock authors={volumeInfo.authors} />
      </div>
    </Link>
  );
};

export default BookItem;
