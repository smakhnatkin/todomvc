import {ADD_TODO} from "../constants/actionTypes";

const initialState = [{
    title: 'ListItem',
    value: '9a6747fc6259aa374ab4e1bb03074b6ec672cf99',
}, {
    title: 'ListItem 1',
    value: '03074b6ec672cf99',
}, {
    title: 'ListItem 2',
    value: '074b6ec672cf99',
}];

const todos = (state = initialState, { type, payload}) => {
    switch (type) {
        case ADD_TODO: {
            return [...state, payload]
        }

        default:
            return state;
    }

}
export default todos;