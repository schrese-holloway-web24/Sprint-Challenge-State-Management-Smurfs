import React, {useState} from 'react';
import {connect} from 'react-redux';
import {sendSmurfs} from '../actions';

const initialVals = {
    name: '', 
    height: '', 
    age: '', 
    id: ''
}

const NewSmurfForm = props => {
    console.log('props from new one', props)
    const [smurf, setSmurf] = useState({initialVals})

    const changeHandler = e => {
        e.preventDefault();
        setSmurf({...smurf, [e.target.name] : e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.sendSmurfs(smurf)
        // setSmurf({
        //     name: '', 
        //     age: '', 
        //     height: '',
        //     // id: Date.now()
        // })
    }

    return(
        <form onSubmit = {submitHandler}>
            <input type = 'text' placeholder = 'Smurf Name' name = 'name' value = {smurf.name} onChange = {changeHandler} required />
            <input type = 'text' placeholder = 'Smurf Height' name = 'height' value = {smurf.height} onChange = {changeHandler} required />
            <input type = 'text' placeholder = 'Smurf Age' name = 'age' value = {smurf.age} onChange = {changeHandler} required/>
            <button type = 'submit'>Create New Smurf!</button>
        </form>
    )
}

const mapStateToProps = state => {
    return{
        smurf: state.smurf, 
        // isFetching: state.isFetching, 
        // error: state.error, 
        // newSmurf: state.newSmurf
    }
}

export default connect(mapStateToProps, {sendSmurfs})(NewSmurfForm);