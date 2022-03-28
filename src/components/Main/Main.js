import cx from 'classnames';
import { TodosList } from '../../components';

import styles from './Main.module.css';

const noop = () => {};

export const Main = ({
    className,
    label='Выбраны все',
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
    <TodosList
        onItemChange={noop}
        onItemDeleteClick={noop}
    />
</section>;
