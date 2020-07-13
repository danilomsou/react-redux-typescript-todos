import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import PropTypes from 'prop-types';

import { IAplicationState } from '../../store';
import { ITodo } from '../../store/ducks/todos/types';

import * as TodosActions from '../../store/ducks/todos/actions';

interface IStateProps {
  todos: ITodo[];
}

interface IDispatchProps {
  loadRequest(): void;
  loadSuccess(data: ITodo[]): void;
}

type IProps = IStateProps & IDispatchProps;

const TodoList: React.FC<IProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
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
