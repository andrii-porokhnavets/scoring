import { FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE } from '../constants/action-types';

const initialState = {
    games: [],
    loading: false,
    error: null
};

export default function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_GAMES_SUCCESS:
            console.log('reducer');
            return {
                ...state,
                games: action.payload
            };

        case FETCH_GAMES_FAILURE:
            console.log('reducer');
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}
