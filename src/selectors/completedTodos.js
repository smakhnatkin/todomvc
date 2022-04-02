import { createSelector } from 'reselect';

import { getCountTodos } from './todos';
export const getCompletedTodos = ({ completedTodos }) => completedTodos;
export const getCountCompletedTodos = createSelector(
    getCompletedTodos,
    completed => completed.reduce((count, item) => count + item, 0)
);
export const getCountActiveTodos = createSelector(
    getCountTodos,
    getCountCompletedTodos,
    (countAll, countCompleted) => countAll - countCompleted
);
