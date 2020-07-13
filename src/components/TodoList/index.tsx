import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import PropTypes from 'prop-types';

import * as TodosActions from '../../store/ducks/todos/actions';
import { ITodo } from '../../store/ducks/todos/types';
import { IAplicationState } from '../../store';

interface IStateProps {
  todos: ITodo[];
}

interface IDispatchProps {
  addTodo(title: string): void;
  toggleTodo(id: number): void;
  removeTodo(id: number): void;
}

type IProps = IStateProps & IDispatchProps;

const TodoList: React.FC<IProps> = ({
  todos,
  addTodo,
  toggleTodo,
  removeTodo,
}) => {
  const [title, setTitle] = useState('');

  return (
    <ul>
      <input
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        type="text"
      />
      <button onClick={() => addTodo(title)}>Adicionar</button>
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            {todo.complete ? ' check' : ' uncheck'}
            <button
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              Apagar
            </button>
            <button
              onClick={() => {
                toggleTodo(todo.id);
              }}
            >
              Toggle
            </button>
          </li>
        ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = ({ todos }: IAplicationState) => ({
  todos: todos.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TodosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
