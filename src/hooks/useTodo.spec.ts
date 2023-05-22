import { renderHook, act } from "@testing-library/react-hooks";
import { useTodo } from "./useTodo";

describe("useTodo", () => {
  it("should return todos, addTodoItem and markTodoAsDone", () => {
    const { result } = renderHook(() => useTodo());

    const { todos, addTodoItem, markTodoAsDone } = result.current;
    expect(todos).toEqual([]);

    expect(addTodoItem).toBeInstanceOf(Function);
    expect(markTodoAsDone).toBeInstanceOf(Function);
  });

  it("should add todo item", () => {
    const { result } = renderHook(() => useTodo());

    act(() => {
      result.current.addTodoItem({
        id: "1",
        title: "test",
      });
    });

    expect(result.current.todos).toEqual([
      {
        id: expect.any(String),
        title: "test",
      },
    ]);
  });
});
