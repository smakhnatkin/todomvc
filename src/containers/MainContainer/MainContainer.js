import { useSelector, useDispatch } from 'react-redux';
import {Main} from '../../components';
import {getTodos} from "../../selectors/todos";
import {getCompletedTodos} from "../../selectors/completedTodos";

export const MainContainer = () => {
    const dispatch = useDispatch();

    const todos = useSelector(getTodos);
    const completedTodos = useSelector(getCompletedTodos);

    const handleItemChange = ({ target: { value } }) => {
        dispatch({})
    }

    const handleItemDeleteClick = ({ target: { value } }) => {
        dispatch({})
    }

    return <Main
        label='Выбраны все'
        list={todos}
        completed={completedTodos}
        onItemChange={handleItemChange}
        onItemDeleteClick={handleItemDeleteClick}
    />
}