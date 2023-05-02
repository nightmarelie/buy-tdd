import React, { FC } from "react";
import { TodoItem } from "./Todo";

type TodoListProps = {
  todos: TodoItem[];
  markItemAsDone: (todo: TodoItem) => void;
};

export const TodoList: FC<TodoListProps> = ({
  todos,
  markItemAsDone,
}: {
  todos: TodoItem[];
  markItemAsDone: (todo: TodoItem) => void;
}) => {
  return (
    <ol>
      {todos.map((item) => (
        <li key={item.id} onClick={() => markItemAsDone(item)}>
          <span>{item.title}</span>
          <span className="material-symbols-outlined">check_circle</span>
        </li>
      ))}
    </ol>
  );
};
