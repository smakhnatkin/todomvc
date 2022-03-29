import {ADD_TODO} from "../constants/actionTypes";

const todos = (state = [], { type, payload}) => {
    switch (type) {
        case ADD_TODO: {
            return [...state, payload]
        }

        default:
            return state;
    }

}
export default todos;