import { render, screen } from "@testing-library/react";
import { OrderDetails } from "./OrderDetails";

describe("OrderDetails", () => {
  it("should render the order details", () => {
    render(<OrderDetails />);
    const orderDetails = screen.getByText("Order Details");

    expect(orderDetails).toBeInTheDocument();
  });
});
