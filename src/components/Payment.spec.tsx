import { render, screen } from "@testing-library/react";
import { Payment } from "./Payment";

describe("Payment", () => {
  it("renders a payment", () => {
    render(<Payment amount={10} />);

    expect(screen.getByText("Payment")).toBeInTheDocument();
  });

  it("shows the option of donate", () => {
    render(<Payment amount={10} />);

    expect(
      screen.getByText("I would like to donate $1 to charity.")
    ).toBeInTheDocument();
  });

  it("shows the text when the checkbox is checked", () => {
    render(<Payment amount={10} />);

    const checkbox = screen.getByRole("checkbox");
    checkbox.click();

    expect(screen.getByText("Thanks for your donation.")).toBeInTheDocument();
  });
});
