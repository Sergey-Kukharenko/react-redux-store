import {FETCH_PHONES_BY_ID_SUCCESS} from '../actions/types';
import {merge} from '../components/utils';

const initialState = {
    id: null
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_BY_ID_SUCCESS:
            return merge(state, {id: payload.id});

        default:
            return state;
    }
};
