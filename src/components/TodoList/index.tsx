import React from 'react';

interface ITodo {
  id: number;
  title: string;
}

const TodoList: React.FC = () => {
  const todos: ITodo[] = [
    {
      id: Math.random(),
      title: 'Fazer café',
    },
    {
      id: Math.random(),
      title: 'Estudar react',
    },
    {
      id: Math.random(),
      title: 'Estudar redux',
    },
    {
      id: Math.random(),
      title: 'Estudar Sagas',
    },
  ];

  return (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
