import cx from 'classnames';

import styles from './Header.module.css';

// 1 - props
export const Header = ({
    children,
    className,
    onChange,
    onKeyDown,
    setValue,
    value,
    ...props
}) => {

    // 2 - динамика
    const blockClass = cx(styles._, {
        [className]: !!className
    });

    const handleChange = (event) => {
        onChange(event)
    }

    // 3 - рендер
    return (
        <header
            className={blockClass}
            {...props}
        >
            <h1 className={styles.title}>todos</h1>
            <input
                value={value}
                onKeyDown={onKeyDown}
                onChange={handleChange}
                className={styles.input}
                placeholder="тест"
                autoFocus
            />
        </header>
    );
}







