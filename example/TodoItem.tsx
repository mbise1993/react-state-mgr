import React from 'react';

export interface TodoItemProps {
  isDone: boolean;
  text: string;
  onCheckClick(): void;
  onDeleteClick(): void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  isDone,
  text,
  onCheckClick,
  onDeleteClick,
}) => {
  return (
    <li>
      <input id="is-done-checkbox" type="checkbox" checked={isDone} onChange={onCheckClick} />
      <label htmlFor="is-done-checkbox">{text}</label>
      <button onClick={onDeleteClick}>X</button>
    </li>
  );
};
