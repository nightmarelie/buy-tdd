import { render, screen } from "@testing-library/react";
import { TodoInput } from "./TodoInput";

describe("TodoInput", () => {
  it("should render the input box", () => {
    render(<TodoInput onItemAdded={jest.fn()} />);
    const input = screen.getByLabelText("input");

    expect(input).toBeInTheDocument();
  });

  it("should call onItemAdded when enter is pressed", () => {
    const onItemAdded = jest.fn();
    render(<TodoInput onItemAdded={onItemAdded} />);
    const input = screen.getByLabelText("input");

    input.focus();
    input.setSelectionRange(0, 0);
    input.value = "Buy some milk.";
    input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));

    expect(onItemAdded).toHaveBeenCalledTimes(1);
    expect(onItemAdded).toHaveBeenCalledWith({
      id: expect.any(String),
      title: "Buy some milk.",
    });
  });
});
