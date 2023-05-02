import React, { FC } from "react";
import { useTodo } from "../hooks/useTodo";

export type TodoItem = {
  id: string;
  title: string;
};

export type TodoProps = {
  items: TodoItem[];
};

export const Todo: FC<TodoProps> = ({ items }) => {
  const { todos, addTodo, markTodoAsDone } = useTodo(items);

  return <div className="containers">Todo</div>;
};
