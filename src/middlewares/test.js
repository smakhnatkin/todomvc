const test = store => () => action => {
    const { dispatch } = store;
    const { type, payload, url } = action;
    if (url) {
        dispatch({
            type: `${type}_START`
        })
        // getDataFromServer(url, payload)
        const data = {};
        const error = {};

        if (data && !error) {
            dispatch({
                type: `${type}_SUCCESS`,
                payload: data
            })
        } else {
            dispatch({
                type: `${type}_ERROR`,
                payload: error
            })
        }

    }
    dispatch(action)

}

export default test;


// const template = store => next => action => {
//     console.log(store, next, action);
// }
