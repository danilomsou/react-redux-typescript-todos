/**
 * Actions types
 */
export enum TodosTypes {
  ADD = '@todos/ADD',
  TOGGLE = '@todos/TOGGLE',
  REMOVE = '@todos/REMOVE',
}

/**
 * Data types
 */

export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

/**
 * State type
 */
export interface ITodosState {
  readonly data: ITodo[];
  readonly loading: boolean;
  readonly error: boolean;
}
