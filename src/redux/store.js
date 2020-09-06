import { createStore, compose, applyMiddleware } from 'redux';
import createClientMiddleware from './middleware';
import rootReducer from './reducer';

const makeStore = (initialState) => {
  const middleware = [createClientMiddleware()];
  const enhancers = [
    applyMiddleware(...middleware),
    typeof window !== 'undefined' && process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  ];

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  return store;
}

export default makeStore;
