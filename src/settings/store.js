import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from '../reducers';

const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const store = storeWithMiddleware(
    reducers,
  );

export default store;
