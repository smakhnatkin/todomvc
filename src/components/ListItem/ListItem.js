import {useState, useRef, useEffect} from 'react';
import cx from 'classnames';
import { ClickOutside } from '../../components'
import { noop } from '../../utils/noop';
import { ENTER } from '../../constants/keyCodes';

import styles from './ListItem.module.css';

const DELAY = 1000;

export const ListItem = ({
    className = '',
    onEditChange = noop,
    onSelectChange = noop,
    onDelete = noop,
    selected,
    title,
    value,
    ...props
}) => {
    // state
    const [isEditing, setIsEditing] = useState(false);
    const [editingValue, setEditingValue] = useState(title);

    const ref = useRef(null);
    const [clickCount, setClickCount] = useState(0);

    // css классы
    const blockClass = cx(styles._, className);
    const titleClass = cx(styles.title, {
        [styles.titleChecked]: selected
    })

    // обработчики событий
    const handleRowClick = () => {
        setClickCount(clickCount + 1);
    };
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

    const handleSelectChange = (event) => {
        const { target: { value } } = event;
        setClickCount(0);
        onSelectChange(value);
    }

    const handleEditChange = ({ target: { value } }) => {
        setEditingValue(value)
        onEditChange(value);
    }

    // реализация onDoubleClick в учебных целях
    useEffect(() => {
        setTimeout(() => {
            setClickCount(0);
        }, DELAY);

        if (clickCount > 1) {
            setIsEditing(true)
        }
    }, [clickCount])

    return (
        <li onKeyDown={handleKeyDown} onClick={handleRowClick} className={blockClass} {...props}>
            {!isEditing && <div className={styles.row}>
                <input
                    onChange={handleSelectChange}
                    value={value}
                    className={styles.checkbox} type="checkbox" />
                <label className={titleClass}>{title}</label>
                <button className={styles.deleteButton} />
            </div>}

            {isEditing && <ClickOutside onClickOutside={handleClickOutside}>
                <input ref={ref}
                    className={styles.input}
                    onChange={handleEditChange}
                    value={editingValue}
                />
            </ClickOutside>}
        </li>
    );
}


