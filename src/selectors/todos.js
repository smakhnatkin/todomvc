import { createSelector } from 'reselect'

export const getTodos = ({ todos }) => todos;

export const getCountTodos = createSelector(
    getTodos,
    todos => todos.length
);
export const getHasTodos = createSelector(
    getCountTodos,
    length => length !== 0
);
