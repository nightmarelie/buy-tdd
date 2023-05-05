import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders a app", () => {
    render(<App />);

    expect(screen.getByText("App")).toBeInTheDocument();
  });
});
