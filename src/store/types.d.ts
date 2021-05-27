import store from './store';

type States = ReturnType<typeof store.getState>

declare module 'react-redux' {
  export interface DefaultRootState extends States {}
}