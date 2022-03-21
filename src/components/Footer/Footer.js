import cx from 'classnames';
import { FooterFilters } from '../../components';

import { noop } from '../../utils/noop';

import styles from './Footer.module.css';


const empty = [];

export const Footer = ({
    buttonTitle='Очистить',
    className = '',
    onClearButtonClick = noop,
    selected = false,
    selectedText = 'Выбрано',
    value= empty,
    ...props
}) => {

    const blockClass = cx(styles._, {
        [className]: !!className
    })

    const handleClick = (event) => {
        onClearButtonClick(value)
    }

    return (
        <footer className={blockClass} {...props}>
            <span className={styles.countRow}>
                <strong className={styles.count}>0</strong> {selectedText}
            </span>
            <FooterFilters />
            <button
                onClick={handleClick}
                className={styles.button}>
                {buttonTitle}
            </button>
        </footer>
    );
}
