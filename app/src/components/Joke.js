import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getJoke, fetchFail } from '../actions';

import axios from 'axios';

const Joke = (props) => {
    const { joke, isFetching, error, getJoke, fetchFail} = props;

    useEffect(() => {
        getJoke();
    }, []);

    if (error) {
        return <h2>Joke unable to load due to: {error.err}</h2>
    }

    if (isFetching) {
        return <h2>Loading Joke just for you!</h2>
    }

    const handleClick = ()=> {
        getJoke();
    };

    const jokeSet = joke.setup || joke.joke;
console.log(joke, 'Joke')
    return (
        <>
            <div className='app'>
                <h2 className='setup'> Here is your joke: {jokeSet} </h2>
                <h3 className='delivery'> {joke?.delivery} </h3>
            <div  className='button' onClick={handleClick}><span className='buttonInner'>Want another Joke?</span></div>
            </div>
            <img className='fortnite' src='https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg' />
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