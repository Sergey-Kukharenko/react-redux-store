import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import phones from '../reducers/phones';
import phonesPage from '../reducers/phonesPage';
import phonePage from '../reducers/phonePage';

export default history => combineReducers({
  phones,
  phonesPage,
  phonePage,
  router: connectRouter(history)
});