import { useState } from "react";
import { TodoItem } from "../components/Todo";

export const useTodo = (items: TodoItem[] = []) => {
  const [todos, setTodos] = useState<TodoItem[]>(items);

  const addTodo = (todo: TodoItem) => {
    setTodos([...todos, todo]);
  };

  const markTodoAsDone = (item: TodoItem) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== item.id));
  };

  return {
    todos,
    addTodo,
    markTodoAsDone,
  };
};
