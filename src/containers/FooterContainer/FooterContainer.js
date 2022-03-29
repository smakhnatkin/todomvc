import { useSelector, useDispatch } from 'react-redux';
import { setNewTodoValue } from '../../actionCreators/newTodoValue';
import {Footer } from '../../components';

export const FooterContainer = () => {
    // const dispatch = useDispatch();

    // const completedTodos = useSelector(({ completedTodos }) => completedTodos);
    // const newTodoValue = useSelector(({ newTodoValue }) => newTodoValue);
    // const todos = useSelector(({ todos }) => todos);
    //
    // const handleChange = ({ target: { value } }) => {

    //     const action = setNewTodoValue(value);
    //     // {
    //     //     type: SET_NEW_TODO_VALUE,
    //     //     payload: 'x'
    //     // }
    //     dispatch(action);
    // }

    return <Footer />
}