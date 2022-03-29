import cx from 'classnames';
import {ListItem} from '../../components';
import { noop } from '../../utils/noop';

import styles from './List.module.css';

const empty = [];

export const List = ({
    className,
    list = empty,
    onItemChange = noop,
    onItemDeleteClick = noop,
    ...props
}) => <ul className={cx(styles._, className)} {...props}>
    {list.map(({
        title,
        value
    }) => <ListItem
        id={value}
        key={value}
        onChange={onItemChange}
        onDelete={onItemDeleteClick}
        title={title}
        value={value}
    />)}
</ul>;