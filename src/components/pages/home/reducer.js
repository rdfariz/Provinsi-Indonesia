const initialState = {
    daftarProvinsi: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PROVINSI_SUCCESS":
            return {
                ...state,
                daftarProvinsi: action.provinsi
            }
            break;
        case "GET_PROVINSI_FAILED":
            return {
                ...state
            } 
            break;
        default:
            return state
            break;
    }
}