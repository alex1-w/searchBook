import styles from './Header.module.scss';
import InputBlock from '../../../components/UI/InputBlock/InputBlock';
import SelectBlock from '../../../components/UI/SelectBlock/SelectBlock';
import { FC, useState } from 'react';
import { categoryOptions, sortingOptions } from './options.data';
import { useAppDispatch } from '../../../store/reduxHooks/reduxHooks';
import { fetchBooks } from '../../../store/books/booksActions';
import { Link } from 'react-router-dom';

export interface ISearchFrom {
  searchText: string;
  category?: string;
  orderBy?: string;
}

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [queryArgs, setQueryArgs] = useState<ISearchFrom>({
    searchText: '',
    category: categoryOptions[0].value,
    orderBy: sortingOptions[0].value,
  });

  const getBooksByQuery = () => {
    dispatch(
      fetchBooks({
        query: {
          text: queryArgs.searchText,
          category: queryArgs.category,
          orderBy: queryArgs.orderBy,
        },
      }),
    );
  };

  const handleSorting = (value: string) => {
    setQueryArgs({ ...queryArgs, orderBy: value });
    dispatch(fetchBooks({ query: { orderBy: queryArgs.orderBy } }));
  };

  const handleCategory = (value: string) => {
    setQueryArgs({ ...queryArgs, category: value });
    dispatch(fetchBooks({ query: { category: queryArgs.category } }));
  };
  console.log(queryArgs);

  const selectedFilter = categoryOptions.find((item) => item.value === queryArgs.category);
  const selectedSorting = sortingOptions.find((item) => item.value === queryArgs.orderBy);

  return (
    <header className={styles.main}>
      <div className={styles.main__wrapper}>
        <div>
          <Link to='/'>
            <h1>Search for books</h1>
          </Link>
          <InputBlock
            queryArgs={queryArgs}
            setQueryArgs={setQueryArgs}
            name='search'
            placeholder='Поиск...'
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
