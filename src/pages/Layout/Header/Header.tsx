import styles from './Header.module.scss';
import InputBlock from '../../../components/UI/InputBlock/InputBlock';
import SelectBlock from '../../../components/UI/SelectBlock/SelectBlock';
import { FC, useState } from 'react';
import { categoryOptions, sortingOptions } from './options.data';
import { useAppDispatch } from '../../../store/reduxHooks/reduxHooks';
import { fetchBooks } from '../../../store/books/booksActions';

export interface ISearchFrom {
  searchText: string;
  category: string;
  filter: string;
}

const Header: FC = () => {
  const [queryArgs, setQueryArgs] = useState<ISearchFrom>({
    searchText: '',
    category: categoryOptions[0].label,
    filter: sortingOptions[0].label,
  });
  const dispatch = useAppDispatch();

  const getBooksByQuery = () => {
    dispatch(fetchBooks({ args: { searchText: queryArgs.searchText, orderBy: queryArgs.filter, category: queryArgs.category} }));
  };

  const handleSorting = (value: string) => {
    setQueryArgs({ ...queryArgs, filter: value });
  };

  const handleCategory = (value: string) => {
    setQueryArgs({ ...queryArgs, category: value });
  };

  const selectedFilter = categoryOptions.find((item) => item.value === queryArgs.category);
  const selectedSorting = sortingOptions.find((item) => item.value === queryArgs.filter);

  return (
    <header className={styles.main}>
      <div className={styles.main__wrapper}>
        <div>
          <h1>Search for books</h1>

          <InputBlock
            queryArgs={queryArgs}
            setQueryArgs={setQueryArgs}
            name='search'
            placeholder='Поиск...'
            // orderBy={filter}
            // sorting={sorting}
            getBooksByQuery={getBooksByQuery}
          />

          <div className={styles.selectsBlock}>
            <div className={styles.selectsBlock__item}>
              <p>Categories</p>

              <SelectBlock
                selected={selectedFilter || categoryOptions[0]}
                queryArgs={queryArgs}
                setQueryArgs={setQueryArgs}
                options={categoryOptions}
                onChange={handleCategory}
                placeholder=''
              />
            </div>

            <div className={styles.selectsBlock__item}>
              <p>Sorting by</p>

              <SelectBlock
                selected={selectedSorting || sortingOptions[0]}
                queryArgs={queryArgs}
                setQueryArgs={setQueryArgs}
                options={sortingOptions}
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
