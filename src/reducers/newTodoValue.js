import {SET_NEW_TODO_VALUE, SET_TODOS} from "../actionTypes";


const newTodoValue = (state = '', { type, payload }) => {
    switch (type) {
        case SET_NEW_TODO_VALUE: {
            return payload
        }
        case SET_TODOS: {
            return ''
        }

        default:
            return state;
    }
}
export default newTodoValue;