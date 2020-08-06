import React from 'react';
import { decActionCreator, incActionCreator, rndActionCreator } from '../../actions';
import { connect } from 'react-redux';

const Counter = ({ counter, inc, dec, rnd }) => {
    return(
        <div className="Counter">
            <h1>Counter</h1>
            <div id="conter">{counter}</div>
            <button onClick={ dec } id="dec">DEC</button>
            <button onClick={ inc } id="inc">INC</button>
            <button onClick={ rnd } id="rnd">RND</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(incActionCreator()),
        dec: () => dispatch(decActionCreator()),
        rnd: () => {
            const payload = Math.floor(Math.random()*10);
            dispatch(rndActionCreator(payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);