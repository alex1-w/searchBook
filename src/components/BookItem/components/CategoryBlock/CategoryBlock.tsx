import { Category } from '../../../../types/IBooksRespons';
import styles from './CategoryBlock.module.scss';
import { FC } from "react"

const CategoryBlock: FC<{ categories: Category }> = ({ categories }) => {


    return (
        <div className={styles.main}>
            {categories
                ?
                <div className={styles.booksCategory}>
                    {
                        categories.map(category => (
                            <p key={category}>
                                {category}
                            </p>
                        ))}
                </div>
                :
                <></>
            }
        </div>
    )
};

export default CategoryBlock;
