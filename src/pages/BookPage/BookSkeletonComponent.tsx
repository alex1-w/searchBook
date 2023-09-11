import styles from './BookPage.module.scss';
import { Skeleton } from '../../components/UI/Skeleton/Skeleton';
import { FC } from 'react';

const BookSkeletonComponent: FC = () => {
    return (

        <section className={styles.bookWrapperSkeleton}>
            <div className={styles.imgBlock}>
                <Skeleton className={styles.imgBlockSkeleton} />
            </div>

            <div className={styles.infoBlockSkeleton}>
                <div>
                    <Skeleton className={styles.skeletonTitle} />
                    <Skeleton className={styles.categorySkeleton} />
                </div>
                <div>
                    <Skeleton className={styles.authorsSkeleton} />
                    <Skeleton className={styles.descriptionSkeleton} />
                </div>
            </div>
        </section>
    );
};

export default BookSkeletonComponent;
