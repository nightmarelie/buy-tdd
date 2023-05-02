import React, { FC } from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export type TodoItem = {
  id: string;
  title: string;
};

export type TodoProps = {
  items?: TodoItem[];
};

export const Todo: FC<TodoProps> = ({ items = [] }) => {
  const { todos, addTodoItem, markTodoAsDone } = useTodo(items);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoInput onItemAdded={addTodoItem} />
      <TodoList todos={todos} markItemAsDone={markTodoAsDone} />
    </div>
  );
};
