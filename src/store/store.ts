import { combineReducers, createStore } from 'redux';
import mini from './ducks/mini';

const reducers = combineReducers({
  mini,
});

const store = createStore(reducers);

export default store;

