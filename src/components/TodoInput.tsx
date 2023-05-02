import React, { ChangeEvent, useState, KeyboardEvent, FC } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./Todo";

type TodoInputProps = {
  onItemAdded: (item: TodoItem) => void;
};

export const TodoInput: FC<TodoInputProps> = ({
  onItemAdded,
}: {
  onItemAdded: (item: TodoItem) => void;
}) => {
  const [todo, setTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const id = uuid();
      onItemAdded({ id: id, title: todo });
    }
  };

  return (
    <input
      className="todoInputBox"
      type="text"
      name="input"
      value={todo}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Buy some milk."
    />
  );
};
