const initialState = {
    loading: true
}
export default function reducer(state= initialState, action) {
    console.log(action)
    switch (action.type) {
        case "SET_LOADING_TRUE":
            return {
                ...state,
                loading: true
            }
            break;
        case "SET_LOADING_FALSE":
            return {
                ...state,
                loading: false
            }
            break;
        default:
            return state
            break;
    }
}