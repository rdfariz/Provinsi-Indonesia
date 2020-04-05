import fetch from '../../../utils/fetch'
import * as actions from '../../../config/action'

export function getProvinsi() {
    return dispatch => {
        dispatch(setLoading("SET_LOADING_TRUE"))
        const options = {
            method: 'GET',
            url: 'http://localhost:3000/api/provinsi',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        }
        return fetch(options)
        .then(res=>{
            dispatch(setProvinsi("GET_PROVINSI_SUCCESS", res))
        }).catch(err=>{
            dispatch(setProvinsi("GET_PROVINSI_FAILED", err))
        }).finally(end=>{
            dispatch(setLoading("SET_LOADING_FALSE"))
        })
    }
}

function setLoading(type) {
    return {
        type
    } 
}
function setProvinsi(type, data) {
    return {
      type,
      data
    };
}