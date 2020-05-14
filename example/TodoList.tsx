import React from 'react';
import { TodoItem } from './TodoItem';
import { useTodoListViewModel } from './todoListViewModel';

export const TodoList: React.FC = () => {
  const vm = useTodoListViewModel();

  return (
    <div>
      <input
        id="add-item-input"
        value={vm.newItemText}
        onChange={e => vm.onNewItemTextChange(e.target.value)}
      />
      <ul>
        {vm.items.map(item => (
          <TodoItem
            key={item.id}
            isDone={item.isDone}
            text={item.text}
            onCheckClick={() => vm.onCheckClick(item.id)}
            onDeleteClick={() => vm.onDeleteClick(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};
