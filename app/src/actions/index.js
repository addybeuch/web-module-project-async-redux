import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getJoke = () => dispatch => {
    dispatch(fetchStart());

    axios.get('https://v2.jokeapi.dev/joke/Any')
        .then(resp=> {
            dispatch(fetchSuccess(resp.data));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        });
}

export const fetchStart = ()=> {
    return ({type:FETCH_START});
}

export const fetchSuccess = (joke)=> {
    return ({type:FETCH_SUCCESS, payload:joke});
}

export const fetchFail = (error)=> {
    return ({type:FETCH_FAIL, payload:error});
}