import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import phones from '../reducers/phones';
import phonesPage from '../reducers/phonesPage'

export default history => combineReducers({
  phones,
  phonesPage,
  router: connectRouter(history)
});