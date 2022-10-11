import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// TODO: test-driven development
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("index");
  expect(linkElement).toBeInTheDocument();
});
