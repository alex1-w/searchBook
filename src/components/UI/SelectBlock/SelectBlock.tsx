import styles from './SelectBlock.module.scss';
import Option from './Option/Option';
import { FC, useState, MouseEventHandler, useRef } from "react"
import { arrowIcon } from '../../icons/icons';

export interface IOption {
    value: string;
    label: string;
}

interface ISelectProps {
    selected: IOption ;
    options: IOption[];
    placeholder?: string;
    status?: 'default' | 'invalid';
    onChange?: (selected: IOption['value']) => void;
    onClose?: () => void;
};

const SelectBlock: FC<ISelectProps> = ({ options, selected, onChange, onClose, placeholder, status }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const arrowRef = useRef<HTMLDivElement>(null)

    const handleOptionClick = (value: IOption['value']) => {
        setIsOpen(false);
        onChange?.(value);
    };
    const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen(prev => !prev);
    };


    return (
        <div className={styles.selectWrapper} >
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

            {
                isOpen && (
                    <ul className={styles.select}>
                        {options.map((option) => (
                            <Option
                                key={option.value}
                                option={option}
                                onClick={handleOptionClick}
                            />
                        ))}
                    </ul>
                )}
        </div>
    )
};

export default SelectBlock;
