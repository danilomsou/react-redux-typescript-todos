import { action, Action } from 'typesafe-actions';
import { TodosTypes } from './types';

export const addTodo = (title: string): Action => action(TodosTypes.ADD, title);

export const toggleTodo = (id: number): Action => action(TodosTypes.TOGGLE, id);

export const removeTodo = (id: number): Action => action(TodosTypes.REMOVE, id);
