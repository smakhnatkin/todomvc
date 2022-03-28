import cx from 'classnames';
import styles from  './YaSearch.module.css';
import {useEffect, useState} from "react";


const getSomeFrom = () => {};

export const YaSearch = ({
    children,
    className,
    value,
    onChange,
    ...props
}) => {

    const [text, setText] = useState('');

    const handleChange = ({ target: { value } }) => {
        setText(value);
    }

    useEffect(() => {
        getSomeFrom('ya.ru');
    }, [value]);

    return (
        <div
            className={cx(styles._, {[className]: !!className})}
            {...props}
        >
            <input
                value={text}
                onChange={handleChange}
            />
        </div>
    )
}


