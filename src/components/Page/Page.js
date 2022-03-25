import { useState } from 'react';
import cx from 'classnames';
import { Footer, Header, Main } from '../../components';
import { ENTER } from '../../constants/keyCodes';
import { useSelector, useDispatch } from 'react-redux';
import { setNewTodoValue } from '../../actionCreators/newTodoValue';

import styles from  './Page.module.css';


// 1 входные параметры ==================================
export const Page = ({
    className,
    completedTodos,
    newTodos,
    newTodoValue,
    onChange,
    todos,
    ...props
}) => {


    // 2 динамика ======================================

    // state приложения
    const [, setTodos] = useState([]);


    // динамически, меняющиеся классы компонента
    const blockClass = cx(styles._, {[className]: !!className});

    const handleKeyDown = ({ keyCode }) => {
        // если нажата клавиша ENTER,
        if (keyCode === ENTER) {
            // то значение списка записей "to do" обновляются
            setTodos([...todos, {
                title: newTodoValue,
                value: newTodoValue,
            }])
            // а строка ввода обнуляется
            setNewTodoValue('');
        }
    };

    // 3 отрисовка ======================================
    // рендер
    const hasList = todos.length !== 0;

    return (
        <div
            className={blockClass}
            {...props}
        >
            <Header
                onChange={onChange}
                onKeyDown={handleKeyDown}
                value={newTodoValue}
            />

            {hasList && <>
                <Main />
                <Footer
                    completedTodos={completedTodos}
                />
            </>}

        </div>
    )
}

export const PageContainer = () => {
    const dispatch = useDispatch();
    const completedTodos = useSelector(({ completedTodos }) => completedTodos);
    const newTodoValue = useSelector(({ newTodoValue }) => newTodoValue);
    const todos = useSelector(({ todos }) => todos);

    const handleChange = ({ target: { value } }) => {
        dispatch(setNewTodoValue(value));
    }

    return <Page
        onChange={handleChange}
        completedTodos={completedTodos}
        newTodoValue={newTodoValue}
        todos={todos}
    />
}