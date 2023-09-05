import styles from './AuthorsBlock.module.scss';
import { Authors } from '../../../../types/IBooksRespons';
import { FC } from 'react';

const AuthorsBlock: FC<{ authors: Authors }> = ({ authors }) => {
  return (
    <div className={styles.main}>
      {authors ? (
        <>
          {authors.map((author) => (
            <h3 key={author}>{author}</h3>
          ))}
        </>
      ) : (
        <>{authors}</>
      )}
    </div>
  );
};

export default AuthorsBlock;
