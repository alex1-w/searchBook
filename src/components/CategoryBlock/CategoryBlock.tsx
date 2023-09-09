import styles from './CategoryBlock.module.scss';
import { Category } from '../../types/IBooksResponse';
import { FC } from 'react';
import cn from 'classnames';

interface ICategoryBlock {
  categories: Category;
  style?: 'mini' | 'bookPageVariant';
}

const CategoryBlock: FC<ICategoryBlock> = ({ categories, style = 'mini' }) => {
  return (
    <div
      className={cn(styles.main, {
        [styles.mini]: style === 'mini',
        [styles.bookPageVariant]: style === 'bookPageVariant',
      })}
    >
      {categories ? (
        <div>
          {categories.map((category) => (
            <p key={category}>{category}</p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CategoryBlock;
