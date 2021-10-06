import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getJoke, fetchFail } from '../actions';

import axios from 'axios';

const Joke = (props) => {
    const { joke, isFetching, error, getJoke, fetchFail} = props;

    useEffect(() => {
        props.getJoke();
    }, []);

    if (error) {
        return <h2>Joke unable to load due to: {error}</h2>
    }

    if (isFetching) {
        return <h2>Loading Joke just for you!</h2>
    }

    const handleClick = ()=> {
        props.getJoke();
    };

    return (
        <>
            <div>
                <h2> Here is your joke: {joke.setup} </h2>
                <h3> {joke.delivery} </h3>
            </div>
            <button onClick={handleClick}>Want another Joke?</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getJoke, fetchFail })(Joke);