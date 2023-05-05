import { render, screen } from "@testing-library/react";
import { Payment } from "./Payment";

describe("Payment", () => {
  it("renders a payment", () => {
    render(<Payment amount={10} />);

    expect(screen.getByText("Payment")).toBeInTheDocument();
  });
});
