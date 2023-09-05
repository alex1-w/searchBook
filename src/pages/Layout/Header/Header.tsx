import styles from './Header.module.scss';
import InputBlock from '../../../components/UI/InputBlock/InputBlock';
import SelectBlock from '../../../components/UI/SelectBlock/SelectBlock';
import { FC, useState } from 'react';

const options = [
  {
    label: 'все',
    value: '&filter=ebooks',
  },
  {
    label: 'предварительный просмотр',
    value: '&filter=partial',
  },
  {
    label: 'виден весь текст',
    value: '&filter=full',
  },
  {
    label: 'бесплатные',
    value: 'filter=free-ebooks',
  },
  {
    label: 'платные',
    value: '&filter=paid-ebooks',
  },
];

const Header: FC = () => {
  const [category, setCategory] = useState('');
  const handleCategory = (value: string) => setCategory(value);

  const [sorting, setSorting] = useState('');
  const handleSorting = (value: string) => setSorting(value);

  const selectedCategory = options.find((item) => item.value === category);
  const selectedSorting = options.find((item) => item.value === sorting);

  return (
    <header className={styles.main}>
      <div className={styles.main__wrapper}>
        <div>
          <h1>Search for books</h1>

          <InputBlock name='search' placeholder='Поиск...' />

          <div className={styles.selectsBlock}>
            <div className={styles.selectsBlock__item}>
              <p>Categories</p>

              <SelectBlock
                options={options}
                selected={selectedCategory || options[0]}
                onChange={handleCategory}
                placeholder=''
              />
            </div>

            <div className={styles.selectsBlock__item}>
              <p>Sorting by</p>

              <SelectBlock
                options={options}
                selected={selectedSorting || options[0]}
                onChange={handleSorting}
                placeholder=''
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
