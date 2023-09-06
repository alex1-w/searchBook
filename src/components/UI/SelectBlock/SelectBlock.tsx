import styles from './SelectBlock.module.scss';
import Option, { IOption } from './Option/Option';
import { FC, useState, MouseEventHandler, useRef } from 'react';
import { arrowIcon } from '../../icons/icons';
import { ISearchFrom } from '../../../pages/Layout/Header/Header';



interface ISelectProps {
    selected: IOption;
    options: IOption[];
    placeholder?: string;
    status?: 'default' | 'invalid';
    onChange?: (selected: IOption['value']) => void;
    queryArgs: ISearchFrom
    setQueryArgs: ({ }: ISearchFrom) => void;
}

const SelectBlock: FC<ISelectProps> = ({ options, selected, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const arrowRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = (value: IOption['value']) => {
        setIsOpen(false);
        onChange?.(value);
    };
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={styles.selectWrapper}>
            <div
                className={styles.placeholder}
                onClick={handlePlaceHolderClick}
                role='button'
                tabIndex={0}
            >
                {selected?.label || placeholder}
            </div>

            <div className={styles.arrow} ref={arrowRef}>
                {arrowIcon}
            </div>

            {isOpen && (
                <ul className={styles.select}>
                    {options.map((option) => (
                        <Option key={option.value} option={option} onClick={handleOptionClick} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectBlock;
