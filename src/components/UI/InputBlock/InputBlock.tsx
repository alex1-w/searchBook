import styles from './InputBlock.module.scss';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { ChangeEvent, KeyboardEvent } from 'react';
import { ISearchFrom } from '../../../pages/Layout/Header/Header';
import { searchIcon } from '../../../icons/icons';

interface IInputBlock {
  placeholder: string;
  name: string;
  queryArgs: ISearchFrom;
  setQueryArgs: ({ }: ISearchFrom) => void;
  getBooksByQuery: () => void;
}

const InputBlock: FC<
  IInputBlock & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ placeholder, name, queryArgs, setQueryArgs, getBooksByQuery }) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryArgs({ ...queryArgs, searchText: e.target.value });
  };

  const searchBooks = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') getBooksByQuery();
  };

  return (
    <div className={styles.main}>
      {searchIcon}
      <input
        name={name}
        placeholder={placeholder}
        type='text'
        value={queryArgs.searchText}
        onChange={changeHandler}
        onKeyDown={searchBooks}
      />
    </div>
  );
};

export default InputBlock;
