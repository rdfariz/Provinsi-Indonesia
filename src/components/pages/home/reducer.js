const initialState = {
    daftarProvinsi: [],
    error: false,
    loading: false
}

export default function reducer(state = initialState, action) {
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
        case "GET_PROVINSI_SUCCESS":
            return {
                ...state,
                daftarProvinsi: action.data.semuaprovinsi,
                error: false
            }
            break;
        case "GET_PROVINSI_FAILED":
            return {
                ...state,
                error: true
            } 
            break;
        default:
            return state
            break;
    }
}