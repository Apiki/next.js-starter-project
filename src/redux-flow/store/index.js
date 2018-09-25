import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  return store;
};

export default configureStore;
