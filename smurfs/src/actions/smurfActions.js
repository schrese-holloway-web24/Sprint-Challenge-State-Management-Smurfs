import axios from 'axios';

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const SEND_SMURFS_START = "SEND_SMURFS_START";

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START})
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_SMURFS_FAILURE, payload: err.res})
        })
}

export const sendSmurfs = (smurfs) => dispatch => {
    dispatch({type: SEND_SMURFS_START})
    axios   
        .post('http://localhost:3333/smurfs', smurfs)
        .then(res => {
            console.log('res from sendSmurf action', res)
        })
        .catch(err => {
            console.log('err from sendSmurfs', err)
        })
}