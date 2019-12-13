import React from 'react';
import {connect} from 'react-redux';
import {sendSmurfs} from '../actions';

const initialVals = {
    name: '', 
    height: '', 
    weight: '', 
    id: ''
}

const NewSmurfForm = props => {

    return(
        <form>
            <input type = 'text' placeholder = 'Smurf Name' name = 'name' required/>
            <input type = 'text' placeholder = 'Smurf Height' name = 'height' required/>
            <input type = 'text' placeholder = 'Smurf Weight' name = 'weight' required/>
            <button>Create New Smurf!</button>
        </form>
    )
}

const mapStateToProps = state => {
    return{
        smurf: state.smurf, 
        isFetching: state.isFetching, 
        error: state.error, 
        newSmurf: state.newSmurf
    }
}

export default connect(mapStateToProps, {sendSmurfs})(NewSmurfForm);