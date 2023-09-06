import styles from './Option.module.scss';
import { FC, MouseEventHandler } from "react"

export interface IOption {
    value: string;
    label: string;
}

type IOptionProps = {
    option: IOption;
    onClick: (value: IOption['value']) => void;
};

const Option: FC<IOptionProps> = ({ onClick, option: { label, value } }) => {

    const handleClick = (clickedValue: IOption['value']): MouseEventHandler<HTMLLIElement> =>
        () => onClick(clickedValue);


    return (
        <li
            className={styles.option}
            value={value}
            onClick={handleClick(value)}
            tabIndex={0}
        >
            <p>{label}</p>
        </li>
    )
};

export default Option;
