import {arrayOfIdsValues, concat, merge} from '../components/utils';
import {FETCH_PHONES_SUCCESS, LOAD_MORE_FETCH_PHONES_SUCCESS, SEARCH_PHONE} from '../actions/types';

const initialState = {
  ids: [],
  search: ''
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return merge(state, {ids: arrayOfIdsValues(payload, 'id')});

    case LOAD_MORE_FETCH_PHONES_SUCCESS:
      const ids = arrayOfIdsValues(payload, 'id');
      return merge(state, {ids: concat(state.ids, ids)});

    case SEARCH_PHONE:
      return merge(state, {search: payload});

    default:
      return state;
  }
};