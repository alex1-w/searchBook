import styles from './AuthorsBlock.module.scss';
import { Authors } from '../../types/IBooksResponse';
import { FC } from 'react';
import cn from 'classnames';

interface IAuthorsBlock {
  authors: Authors;
  variant?: 'bookMini' | 'bookPage';
}

const AuthorsBlock: FC<IAuthorsBlock> = ({ authors, variant = 'bookMini' }) => {
  const commaAdder = (authors: string, index: number) => {
    if (index === 3) return `${authors}`;
    return `${authors}, `;
  };

  console.log(authors);

  return (
    <>
      {authors && (
        <div
          className={cn(styles.main, {
            [styles.bookMini]: variant === 'bookMini',
            [styles.bookPage]: variant === 'bookPage',
          })}
        >
          {authors.length > 1 ? (
            <div className={styles.authorsBlock}>
              {authors.slice(0, 4).map((author, index) => (
                <p key={author}>{commaAdder(author, index)}</p>
              ))}
            </div>
          ) : (
            <p>{authors}</p>
          )}
        </div>
      )}
    </>
  );
};

export default AuthorsBlock;
