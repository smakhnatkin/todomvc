const logger = store => next => action => {
    console.warn(action)
    console.log('сейчас: ', store.getState())
    let result = next(action)
    console.log('будет:  ', store.getState())
    return result;
}

export default logger;


// const template = store => next => action => {
//     console.log(store, next, action);
// }
