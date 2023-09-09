import styles from './AuthorsBlock.module.scss';
import { Authors } from '../../types/IBooksResponse';
import { FC } from 'react';
import cn from 'classnames';

interface IAuthorsBlock {
  authors: Authors;
  variant?: 'bookMini' | 'bookPage';
}

const AuthorsBlock: FC<IAuthorsBlock> = ({ authors, variant = 'bookMini' }) => {
  return (
    <div
      className={cn(styles.main, {
        [styles.bookMini]: variant === 'bookMini',
        [styles.bookPage]: variant === 'bookPage',
      })}
    >
      {authors ? (
        <div className={styles.authorsBlock}>
          {authors.slice(0, 4).map((author) => (
            <p key={author}>{author}</p>
          ))}
        </div>
      ) : (
        <h3>{authors}</h3>
      )}
    </div>
  );
};

export default AuthorsBlock;
