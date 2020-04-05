import fetch from '../../../utils/fetch'

export function getProvinsi() {
    return dispatch => {
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
            const provinsi = res.semuaprovinsi
            dispatch(setProvinsi("GET_PROVINSI_SUCCESS", provinsi))
        }).catch(err=>{
            dispatch(setProvinsi("GET_PROVINSI_FAILED", err))
        })
    }
}

function setProvinsi(type, provinsi) {
    return {
      type,
      provinsi
    };
  }
  