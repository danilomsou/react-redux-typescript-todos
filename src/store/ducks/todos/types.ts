/**
 * Actions types
 */
export enum TodosTypes {
  LOAD_REQUEST = '@todos/LOAD_REQUEST',
  LOAD_SUCCESS = '@todos/LOAD_SUCCESS',
  LOAD_FAILURE = '@todos/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface ITodo {
  id: number;
  title: string;
}

/**
 * State type
 */
export interface ITodosState {
  readonly data: ITodo[];
  readonly loading: boolean;
  readonly error: boolean;
}
