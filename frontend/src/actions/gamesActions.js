import axios from 'axios';

import { FETCH_GAMES_FAILURE, FETCH_GAMES_SUCCESS } from '../constants/action-types';
import { BASE_URL } from "../constants/config";


export function fetchGamesList() {
    return dispatch => {
        axios.get(`${BASE_URL}/games`)
            .then(response => {
                console.log('Games', response);
                const data = response.data;
                dispatch({
                    type: FETCH_GAMES_SUCCESS,
                    payload: data
                })
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: FETCH_GAMES_FAILURE,
                    payload: error
                })
            })
    }
}
