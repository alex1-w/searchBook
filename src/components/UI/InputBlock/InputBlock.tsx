import styles from './InputBlock.module.scss';
import { searchIcon } from '../../icons/icons';
import { DetailedHTMLProps, FC, InputHTMLAttributes, useEffect } from "react"
import { useState, ChangeEvent, KeyboardEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../store/reduxHooks/reduxHooks';
import { actions } from '../../../store/books/booksSlice';
import { fetchBooks } from '../../../store/books/booksActions';
import { API_KEY, mainApi } from '../../../api/api';
import { IBooksResponse } from '../../../types/IBooksRespons';

interface IInputBlock {
    placeholder: string;
    name: string;
}

const InputBlock: FC<IInputBlock & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({ placeholder, name }) => {
    const [searchValue, setSearchValue] = useState('пелевин')
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)

    const dispatch = useAppDispatch()

    const searchBooks = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            dispatch(fetchBooks({ query: searchValue }))
        }
    }

    return (
        <div>
            <div className={styles.main}>
                {searchIcon}
                <input
                    name={name}
                    placeholder={placeholder}
                    type="text"
                    value={searchValue}
                    onChange={changeHandler}
                    onKeyDown={searchBooks}
                />
            </div>

        </div>
    )
};

export default InputBlock;
