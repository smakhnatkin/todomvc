import cx from 'classnames';
import styles from  './Template.module.css';

export const Template = ({
    children,
    className,
    ...props
}) => <div
    className={cx(styles._, {[className]: !!className})}
    {...props}
>
    {children}
</div>
