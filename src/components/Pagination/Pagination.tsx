import styles from './Pagination.module.scss';
import { FC } from 'react';

interface IPagination {
    isAllowPaginate: boolean;
    totalCountPages: number;
    setStartIndex: (prev: any) => void;
}

const Pagination: FC<IPagination> = ({ isAllowPaginate, setStartIndex, totalCountPages }) => {
    return (
        <div className={styles.pagination}>
            {isAllowPaginate ? (
                [
                    ...new Array(totalCountPages).map((_, i) => (
                        <div key={i} onClick={() => setStartIndex((prev: number) => prev + 10)}>
                            <p>{i + 1}</p>
                        </div>
                    )),
                ]
            ) : (
                <></>
            )}
        </div>
    );
};

export default Pagination;
