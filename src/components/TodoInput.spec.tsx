import { render, screen } from "@testing-library/react";
import { TodoInput } from "./TodoInput";

describe("TodoInput", () => {
  it("should render the input box", () => {
    render(<TodoInput onItemAdded={jest.fn()} />);
    const input = screen.getByLabelText("input");

    expect(input).toBeInTheDocument();
  });
});
