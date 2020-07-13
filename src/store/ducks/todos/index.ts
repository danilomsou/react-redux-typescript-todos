import { Reducer } from 'redux';

import { ITodosState, TodosTypes } from './types';

const INITIAL_STATE: ITodosState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer = (state: ITodosState = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.ADD:
      return {
        ...state,
        data: [
          ...state.data,
          { id: Math.random(), title: action.payload, complete: false },
        ],
      };

    case TodosTypes.TOGGLE:
      const todo = state.data.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );
      return { ...state, data: todo };

    case TodosTypes.REMOVE:
      const newTodo = state.data.filter((todo) => todo.id !== action.payload);
      return { ...state, data: newTodo };
    default:
      return state;
  }
};

export default reducer;
