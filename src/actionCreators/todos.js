import { ADD_TODO } from '../constants/actionTypes';

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
});
