import cx from 'classnames';
import { List } from '../../components';

import styles from './Main.module.css';

const noop = () => {};

export const Main = ({
    className,
    label='Выбраны все',
    list,
}) => <section
    className={cx(styles._, {
        [className]: !!className
    })}
>
    <input
        className={styles.toggleAll}
        type="checkbox"
    />
    <label className={styles.toggleAllLabel}>
        {label}
    </label>
    <List
        list={list}
        onItemChange={noop}
        onItemDeleteClick={noop}
    />
</section>;
