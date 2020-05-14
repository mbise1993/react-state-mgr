import React from 'react';

import { TodoService } from './todoService';
import { useService } from 'src';

export const useTodoListViewModel = () => {
  const [newItemText, setNewItemText] = React.useState('');
  const todoService = useService(TodoService, ['items']);

  const onAddClick = () => {
    todoService.addItem(newItemText);
    setNewItemText('');
  };

  const onCheckClick = (itemId: number) => {
    todoService.toggleItemDone(itemId);
  };

  const onDeleteClick = (itemId: number) => {
    todoService.deleteItem(itemId);
  };

  return {
    newItemText,
    onNewItemTextChange: setNewItemText,
    items: todoService.items.value,
    onAddClick,
    onCheckClick,
    onDeleteClick,
  };
};
