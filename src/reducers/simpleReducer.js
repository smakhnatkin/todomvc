const simpleReducer = (state = {
    name: 'Сергей'
}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}
export default simpleReducer;