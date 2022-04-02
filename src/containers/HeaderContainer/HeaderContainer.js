import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../../components';
import { ENTER } from '../../constants/keyCodes';
import { getNewTodoValue } from '../../selectors/newTodoValue';
import {addTodo} from "../../actionCreators/todos";


export const HeaderContainer = () => {
    const dispatch = useDispatch();

    const newTodoValue = useSelector(getNewTodoValue);

    const handleChange = ({ target: { value } }) => {

        // const action = setNewTodoValue(value);
        // dispatch(action);
        // запустится такой объект
        // {
        //     type: SET_NEW_TODO_VALUE,
        //     payload: 'то что в value'
        // }

    }

    const handleKeyDown = ({ keyCode }) => {
        if (keyCode === ENTER) {
            dispatch(addTodo({
                title: newTodoValue,
                value: uuidv4()
            }))
        }
    }

    return <Header
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={newTodoValue}
    />
}