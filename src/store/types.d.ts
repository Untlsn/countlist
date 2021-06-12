import store from './store';

import { actions as mini } from './ducks/mini';
import { actions as lists } from './ducks/lists';

type States = ReturnType<typeof store.getState>

declare module 'react-redux' {
  export interface DefaultRootState extends States {
  }
}

export interface Actions {
  mini: typeof mini
  lists: typeof lists
}