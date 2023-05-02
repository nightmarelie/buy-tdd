import { fireEvent, render, screen } from "@testing-library/react";
import { Todo } from "./components/Todo";

describe("App", () => {
  it("renders an item", () => {
    const todos = [
      {
        id: "id-1",
        title: "buy some milk",
      },
    ];

    render(<Todo items={todos} />);

    expect(screen.getByText("buy some milk")).toBeInTheDocument();
  });

  it("renders multiple items", () => {
    const todos = [
      {
        id: "id-1",
        title: "buy some milk",
      },
      {
        id: "id-2",
        title: "buy some apples",
      },
    ];

    render(<Todo items={todos} />);

    expect(screen.getByText("buy some milk")).toBeInTheDocument();
    expect(screen.getByText("buy some apples")).toBeInTheDocument();
  });

  it("add new item to the list", () => {
    render(<Todo items={[]} />);

    const input = screen.getByLabelText("input");
    fireEvent.change(input, { target: { value: "buy some oranges" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

    expect(screen.getByText("buy some oranges")).toBeInTheDocument();
  });

  it("marks an item as done", () => {
    render(<Todo items={[{ id: "id-1", title: "buy some milk" }]} />);

    const item = screen.getByText("buy some milk");
    fireEvent.click(item);

    expect(screen.queryByText("buy some milk")).not.toBeInTheDocument();
  });
});
