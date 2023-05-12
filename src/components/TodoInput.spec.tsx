import { fireEvent, render, screen } from "@testing-library/react";
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

    fireEvent.change(input, { target: { value: "Buy some milk." } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onItemAdded).toHaveBeenCalledTimes(1);
    expect(onItemAdded).toHaveBeenCalledWith({
      id: expect.any(String),
      title: "Buy some milk.",
    });
  });

  it("should not call onItemAdded when enter is not pressed", () => {
    const onItemAdded = jest.fn();
    render(<TodoInput onItemAdded={onItemAdded} />);
    const input = screen.getByLabelText("input");

    fireEvent.change(input, { target: { value: "Buy some milk." } });
    fireEvent.keyDown(input, { key: "Space" });

    expect(onItemAdded).toHaveBeenCalledTimes(0);
  });
});
