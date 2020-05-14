import React from 'react';

import { ServiceProvider } from 'src';
import { TodoList } from './TodoList';

export const App: React.FC = () => {
  return (
    <ServiceProvider>
      <TodoList />
    </ServiceProvider>
  );
};
