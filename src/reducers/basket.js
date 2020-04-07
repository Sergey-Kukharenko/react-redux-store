import {mergeIdToArr, removeUniqueArray} from '../components/utils';
import {ADD_PHONE_TO_BASKET, CLEAN_BASKET, REMOVE_PHONE_FROM_BASKET} from '../actions/types';

const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return mergeIdToArr(state, payload);
// начать с 015 - 00.03.26
    case REMOVE_PHONE_FROM_BASKET:
      return removeUniqueArray(payload, state);

    case CLEAN_BASKET:
      return initialState;

    default:
      return state;
  }
};