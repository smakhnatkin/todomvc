import { useState } from 'react';
import cx from 'classnames';
import { Footer, Header, Main } from '../../components';
import { ENTER } from '../../constants/keyCodes'

import styles from  './Page.module.css';


// 1 входные параметры ==================================
export const Page = ({
    className,
    ...props
}) => {

    // 2 динамика ======================================

    // state компонента
    const [completedTodos] = useState([]);
    const [newTodoValue, setNewTodoValue] = useState('');
    const [selectedTodos] = useState([]);
    const [todos, setTodos] = useState([]);

    // динамически, меняющиеся классы компонента
    const blockClass = cx(styles._, {[className]: !!className});

    // обработчики событий
    const handleChange = ({ target: { value } }) => {
        setNewTodoValue(value)
    };
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
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={newTodoValue}
            />

            {hasList && <>
                <Main
                    completedTodos={completedTodos}
                    list={todos}
                    selectedTodos={selectedTodos}
                />
                <Footer />
            </>}

        </div>
    )
}