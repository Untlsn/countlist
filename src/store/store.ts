import { combineReducers, createStore } from 'redux';
import { mini, lists } from './ducks';

const reducers = combineReducers({
  mini,
  lists,
});

const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

