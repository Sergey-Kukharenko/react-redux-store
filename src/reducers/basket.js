import {mergeIdToArr} from '../components/utils';
import {ADD_PHONE_TO_BASKET} from '../actions/types';

const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return mergeIdToArr(state, payload);
    default:
      return state;
  }
};