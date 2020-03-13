import {FETCH_PHONES_SUCCESS, LOAD_MORE_FETCH_PHONES_SUCCESS} from '../actions/types';
import {arrayOfIdsValues, concat, merge} from '../components/utils';

const initialState = {
  ids: []
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return merge(state, {ids: arrayOfIdsValues(payload, 'id')});

    case LOAD_MORE_FETCH_PHONES_SUCCESS:
      const ids = arrayOfIdsValues(payload, 'id');
      return merge(state, {ids: concat(state.ids, ids)});

    default:
      return state;
  }
};