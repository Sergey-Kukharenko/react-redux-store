import {FETCH_PHONES_SUCCESS} from '../actionTypes'

const initialState = {};

const convert = (array, key) => array.reduce((result, item,) => {
    result[item[key]] = item;
    return result
}, {});

const merge = (state, newState) => {
    return {...state, ...newState}
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            // конвертируем массив объектов в объект объектов с ключами 'id' // 1: {}, 2: {}, ...
            const newValues = convert(payload, 'id');
            return merge(state, newValues);

        default:
            return state
    }

};