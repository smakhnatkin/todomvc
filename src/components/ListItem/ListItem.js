import {useState, useRef, useEffect} from 'react';
import cx from 'classnames';
import { ClickOutside } from '../../components'
import { noop } from '../../utils/noop';
import { ENTER } from '../../constants/keyCodes';

import styles from './ListItem.module.css';

const DELAY = 1000;

export const ListItem = ({
    className = '',
    onChange = noop,
    title = '',
    value: initialValue = '',
    ...props
}) => {
    // state
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);
    const ref = useRef(null);
    const [count, setCount] = useState(0);

    // css классы
    const blockClass = cx(styles._, {[className]: !!className});

    // обработчики событий
    const handleClick = () => {
        setCount(count + 1);
    };
    const handleChange = ({ target: { value } }) => {
        setValue(value);
        onChange(value);
    }
    const handleKeyDown = ({ keyCode }) => {
        if (keyCode === ENTER) {
            setIsEditing(false)
        }
    }
    const handleClickOutside = ({ target }) => {
        if (ref.current && !ref.current.contains(target)) {
            setIsEditing(false)
        }
    };

    // реализация onDoubleClick в учебных целях
    useEffect(() => {
        setTimeout(() => {
            setCount(0);
        }, DELAY);

        if (count > 1) {
            setIsEditing(true)
        }
    }, [count])

    return (
        <li onKeyDown={handleKeyDown} onClick={handleClick} className={blockClass} {...props}>
            {!isEditing && <div className={styles.row}>
                <input className={styles.checkbox} type="checkbox" />
                <label className={styles.title}>{value}</label>
                <button className={styles.deleteButton} />
            </div>}

            {isEditing && <ClickOutside onClickOutside={handleClickOutside}>
                <input ref={ref}
                    className={styles.input}
                    onChange={handleChange}
                    value={value}
                />
            </ClickOutside>}
        </li>
    );
}


