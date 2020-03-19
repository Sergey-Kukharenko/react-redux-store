import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import phones from '../reducers/phones';
import phonesPage from '../reducers/phonesPage';
import phonePage from '../reducers/phonePage';
import basket from '../reducers/basket';

export default history => combineReducers({
  phones,
  phonesPage,
  phonePage,
  basket,
  router: connectRouter(history)
});