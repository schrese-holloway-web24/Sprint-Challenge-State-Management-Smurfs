import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, SEND_SMURFS_START} from '../actions';

const initialState = {
    smurf: null,
    isFetchcing: false,
    error: '',
    // name: '',
    // height: '', 
    // age: '', 
    // id: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START: 
            return {
                ...state, 
                isFetchcing: true, 
                error: action.payload
            }
        case FETCH_SMURFS_SUCCESS: 
            return {
                ...state, 
                smurf: action.payload,
                isFetchcing: false, 
                error: ''
            }
        case FETCH_SMURFS_FAILURE: 
            return {
                ...state, 
                isFetchcing: false,
                error: action.payload
            }
        // case SEND_SMURFS_START: 
        //     return {
        //         ...state, 
        //         isFetching: true, 
        //         error: '', 
        //         smurf: {}
        //     }
        default: 
            return state;
    }
}