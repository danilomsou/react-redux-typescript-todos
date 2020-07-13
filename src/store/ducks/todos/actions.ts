import { action, Action } from 'typesafe-actions';
import { TodosTypes, ITodo } from './types';

export const loadRequest = (): Action => action(TodosTypes.LOAD_REQUEST);

export const loadSuccess = (data: ITodo[]): Action =>
  action(TodosTypes.LOAD_SUCCESS, data);

export const loadFailure = (): Action => action(TodosTypes.LOAD_FAILURE);
