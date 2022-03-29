import cx from 'classnames';

import styles from  './Page.module.css';
import {FooterContainer, HeaderContainer, MainContainer} from "../../containers";


// 1 входные параметры ==================================
export const Page = ({
    className,
    hasList,
    ...props
}) => {

    // динамически, меняющиеся классы компонента
    const blockClass = cx(styles._, className);

    return (
        <div
            className={blockClass}
            {...props}
        >
            <HeaderContainer />

            {hasList && <>
                <MainContainer />§
                <FooterContainer />
            </>}
        </div>
    )
}
