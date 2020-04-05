export function setLoading(bool) {
    if (bool) {
        return dispatch => {
            dispatch(loading("SET_LOADING_TRUE"))
        }
    }else {
        return dispatch => {
            dispatch(loading("SET_LOADING_FALSE"))
        }
    }
}

function loading(type) {
    return {
        type
    }
}