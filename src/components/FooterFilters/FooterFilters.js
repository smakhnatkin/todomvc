import cx from 'classnames';
import styles from './FooterFilters.module.css';

const initialList = [{
    title: 'Все',
    link: '#/',
}, {
    title: 'Активные',
    link: '#/active',
}, {
    title: 'Завершенные',
    link: '#/completed',
}];

export const FooterFilters = ({
    className,
    list = initialList,
    ...props
}) => <ui
    className={cx(styles._, {[className]: !!className})}
    {...props}
>
    {list.map(({ title, link }) => <li
        className={styles.item}
        key={title}
    >
        <a className={styles.link} href={link}>{title}</a>
    </li>)}
</ui>
