import styles from './Pagination.module.scss';
import { FC, ChangeEvent } from 'react';
import ReactPaginate from 'react-paginate';
import { arrowLeft, arrowRight } from '../../../icons/icons';

interface IPagination {
    pageCount: number;
    onPageChange?: () => void;
    setStartIndex: (i: number) => void;
}

const Pagination: FC<IPagination> = ({ pageCount, onPageChange, setStartIndex }) => {
    const handleClick = (event: any) => {
        console.log(event.selected);
        setStartIndex(event.selected * 20);
    };

    return (
        <ReactPaginate
            className={styles.main}
            pageCount={pageCount}
            // nextLabel={pageCount > 10 && arrowRight}
            nextLabel={arrowRight}
            previousLabel={arrowLeft}
            disabledClassName={styles.arrows}
            onPageChange={(e) => handleClick(e)}
            pageRangeDisplayed={5}
            breakLabel='...'
            activeLinkClassName={styles.activePage}
        />
    );
};

export default Pagination;
