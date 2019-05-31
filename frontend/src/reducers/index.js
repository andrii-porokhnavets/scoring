import { TEST } from '../constants/action-types';

const initialState = {
    test: false
};

function rootReducer(state = initialState, action) {
    if (action.type === TEST) {
        return Object.assign({}, state, action.payload);
    }
    return state;
}

export default rootReducer;
