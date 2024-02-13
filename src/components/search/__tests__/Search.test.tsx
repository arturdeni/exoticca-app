import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Search from "../Search";

describe("Search component", () => {
  test("should call onSearch prop with input value when form is submitted", () => {
    const mockOnSearch = jest.fn();

    render(<Search onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "test query" } });

    const submitButton = screen.getByText("Search");
    fireEvent.click(submitButton);

    expect(mockOnSearch).toHaveBeenCalledWith("test query");
  });
});
