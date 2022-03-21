import cx from 'classnames';
import { ListItem } from '../../components';
import { noop } from '../../utils/noop';

import styles from './List.module.css';

const empty = [];

export const List = ({
    children,
    className,
    list = empty,
    onItemChange = noop,
    onItemDeleteClick = noop,
    ...props
}) => <ul className={cx(styles._, {[className]: !!className})} {...props}>
    {list.map(({
        title,
        value
    }) => {

        const handleItemChange = value => () => {
            onItemChange(value)
        };

        const handleDeleteButtonClick = value => () => {
            onItemDeleteClick(value)
        };

        return (
            <ListItem
                id={value}
                key={value}
                onChnage={handleItemChange}
                onDelete={handleDeleteButtonClick}
                title={title}
                value={value}
            />
        );
    })}
</ul>;
