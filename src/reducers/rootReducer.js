import { combineReducers } from 'redux';
import completedTodos from './completedTodos';
import newTodoValue from './newTodoValue';
import todos from './todos';

export default combineReducers({
    completedTodos,
    newTodoValue,
    todos,
});
