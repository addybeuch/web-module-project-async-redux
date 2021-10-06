import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

const initialState = {
    joke: {
        setup: 'How will Christmas dinner be different after Brexit?',
        delivery: 'No Brussels'
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                joke:{},
                isFetching: true,
                error:''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                joke: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                person: {},
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};