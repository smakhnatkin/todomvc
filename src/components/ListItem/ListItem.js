import cx from 'classnames';
import styles from './ListItem.module.css';

export const ListItem = ({
    className,
    title,
    value,
    ...props
}) => {
    const blockClass = cx(styles._, {[className]: !!className});

    return (
        <li className={blockClass} {...props}>
            <div className={styles.row}>
                <input className={styles.checkbox} type="checkbox" />
                <label className={styles.title}>{title}</label>
                <button className={styles.deleteButton} />
            </div>
            <input className={styles.input} value={value} />
        </li>
    );
}
