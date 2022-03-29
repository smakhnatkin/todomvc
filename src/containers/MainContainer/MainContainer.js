import { useSelector, useDispatch } from 'react-redux';
import {Main} from '../../components';
import {getTodos} from "../../selectors/todos";

export const MainContainer = () => {
    const dispatch = useDispatch();

    const todos = useSelector(getTodos);

    const handleItemChange = ({ target: { value } }) => {
        dispatch({})
    }

    const handleItemDeleteClick = ({ target: { value } }) => {
        dispatch({})
    }

    return <Main
        label='Выбраны все'
        list={todos}
        onItemChange={handleItemChange}
        onItemDeleteClick={handleItemDeleteClick}
    />
}