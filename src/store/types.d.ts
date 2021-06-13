import store from './store';

import { MiniActions } from './ducks/mini';
import { ListsActions } from './ducks/lists';

type States = ReturnType<typeof store.getState>

declare module 'react-redux' {
  export interface DefaultRootState extends States {}
}

export interface Actions {
  mini: MiniActions
  lists: ListsActions
}