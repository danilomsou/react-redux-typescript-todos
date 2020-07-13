import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import TodoList from './components/TodoList';

const App: React.FC = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
