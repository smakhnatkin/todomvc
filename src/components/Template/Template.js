import cx from 'classnames';
import styles from  './Template.module.css';
import {useState} from "react";

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


//
// export const Headphones = ({ type }) => <div></div>
//
// export const HeadphonesBox = ({ children }) => {
//
//     const [isOpen, setIsOpen] = useState(false);
//
//     const handleTouchEnd = () => {
//         setIsOpen(!isOpen)
//     }
//
//     return <div onTouchEnd={handleTouchEnd}>
//         {isOpen && children}
//     </div>;
// }
//
//
// export const Photo = () => <HeadphonesBox>
//     <Headphones type="left" />
//     <Headphones type="right" />
// </HeadphonesBox>
//
//
