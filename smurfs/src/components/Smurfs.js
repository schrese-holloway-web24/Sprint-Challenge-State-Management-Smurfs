import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

//actions
import {getSmurfs} from '../actions';

const Smurfs = props => {
    console.log('props from smurfs', props)

    return (
        <div>
            <h1>Here are the smurfs, I guess? </h1>
            {!props.smurf && !props.isFetching && <p>Click to get some smurfs!</p>}
            {props.isFetching && (
            <Loader 
                type="ThreeDots" 
                color="#somecolor" 
                height={40} 
                width={40} />
            
            )}
            
            {props.smurf && <p>{props.smurf.name}</p>}
            {props.smurf && <p>Age: {props.smurf.age}</p>}
            {props.smurf && <p>Height: {props.smurf.height}</p>}
            <button onClick = {props.getSmurfs}>Smurf</button>
        </div>
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

export default connect(mapStateToProps, {getSmurfs})(Smurfs);