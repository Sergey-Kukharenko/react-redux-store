import {convert, merge} from '../components/utils';
import {
  FETCH_CATEGORIES_SUCCESS,
} from '../actions/types';

const initialState = {}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      const newValues = convert(payload, 'id');
      return merge(state, newValues);

    default:
      return state;
  }

};