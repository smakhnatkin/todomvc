import cx from 'classnames';
import { List } from '../../components';

import styles from './Main.module.css';


export const Main = ({
    className,
    label='Выбраны все',
    completed,
    list,
    onItemChange,
    onItemDeleteClick,
    onToggleAllChange,
    toggleAllValue,
}) => <section className={cx(styles._, className)}>
    <input
        value={toggleAllValue}
        onChange={onToggleAllChange}
        className={styles.toggleAll}
        type="checkbox"
    />
    <label className={styles.toggleAllLabel}>{label}</label>
    <List
        list={list}
        completed={completed}
        onItemChange={onItemChange}
        onItemDeleteClick={onItemDeleteClick}
    />
</section>;
