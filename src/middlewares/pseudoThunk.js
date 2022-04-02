const test = ({ dispatch }) => next => action => {

    if (typeof action === 'function') {
        action()
    } else {
        next(action)
    }

}

export default test;


// const template = store => next => action => {
//     console.log(store, next, action);
// }
