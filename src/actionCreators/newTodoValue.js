import {SET_NEW_TODO_VALUE} from "../constants/actionTypes";

export const setNewTodoValue = payload => {
    return {
        type: SET_NEW_TODO_VALUE,
        payload,
    }
};
