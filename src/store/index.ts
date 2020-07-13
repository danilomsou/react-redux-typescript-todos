import { createStore, Store } from 'redux';

import { ITodosState } from './ducks/todos/types';
import rootReducer from './ducks/rootReducer';

export interface IAplicationState {
  todos: ITodosState;
}

const store: Store<IAplicationState> = createStore(rootReducer);

export default store;
