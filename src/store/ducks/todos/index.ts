import { Reducer } from 'redux';

import { ITodosState, TodosTypes } from './types';

const INITIAL_STATE: ITodosState = {
  data: [
    { id: Math.random(), title: 'Fazer Café' },
    { id: Math.random(), title: 'Estudar redux' },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<ITodosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case TodosTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case TodosTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
