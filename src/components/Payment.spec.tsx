import { fireEvent, render, screen } from "@testing-library/react";
import { Payment } from "./Payment";

describe("Payment", () => {
  it("renders a payment title", () => {
    render(<Payment amount={10} />);

    expect(screen.getByText("Payment")).toBeInTheDocument();
  });

  it("shows the option of donate", () => {
    render(<Payment amount={12} />);

    expect(
      screen.getByText("I would like to donate $1 to charity.")
    ).toBeInTheDocument();
  });

  it("shows thanks when the checkbox is checked", () => {
    render(<Payment amount={10} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(screen.getByText("Thanks for your donation.")).toBeInTheDocument();
  });

  it("shows the total amount", () => {
    render(<Payment amount={20} />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("$20");
  });

  it("shows the total amount when the checkbox is checked", () => {
    render(<Payment amount={20} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("$21");
  });
});
