import { useEffect } from 'react';

export const ClickOutside = ({
    children,
    onClickOutside,
}) => {
    useEffect(() => {
        document.addEventListener('click', onClickOutside, true);
        return () => {
            document.removeEventListener('click', onClickOutside, true);
        };
    }, [onClickOutside]);

    return (<>
        {children}
    </>);
}
