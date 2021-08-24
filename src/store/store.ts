import { combineReducers, createStore } from 'redux';
import { mini, lists } from './ducks';

const reducers = combineReducers({
  mini,
  lists,
});

const store = createStore(reducers);

export default store;

