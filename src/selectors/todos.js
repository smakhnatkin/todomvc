export const getTodos = ({ todos }) => todos;

export const getHasTodos = (state => {
    const todos = getTodos(state);
    return todos.length !== 0;
});