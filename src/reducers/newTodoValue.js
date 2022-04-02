import { SET_NEW_TODO_VALUE, ADD_TODO } from '../constants/actionTypes';


const newTodoValue = (state = 'тест', { type, payload }) => {
    switch (type) {
        case SET_NEW_TODO_VALUE: {
            return payload
        }
        case ADD_TODO: {
            return ''
        }

        default:
            return state;
    }
}
export default newTodoValue;