import {FETCH_PHONES_BY_ID_SUCCESS, FETCH_PHONES_SUCCESS, LOAD_MORE_FETCH_PHONES_SUCCESS} from '../actions/types';
import {convert, merge, createObjWithKey} from '../components/utils';

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            const newValues = convert(payload, 'id');
            return merge(state, newValues);

        case LOAD_MORE_FETCH_PHONES_SUCCESS:
            const moreValues = convert(payload, 'id');
            return merge(state, moreValues);

        case FETCH_PHONES_BY_ID_SUCCESS:
            const newObj = createObjWithKey(payload.id, payload);
            return merge(state, newObj);

        default:
            return state;
    }

};