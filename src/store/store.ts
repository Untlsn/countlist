import { combineReducers, createStore } from 'redux';
import { mini, lists } from './ducks';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  mini,
  lists,
});

const store = createStore(reducers, composeWithDevTools());

export default store;

