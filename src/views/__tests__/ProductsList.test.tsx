import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsList from "../ProductsList";

jest.mock("axios", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        destinations: {
          featuredMultiMarket: [],
          multiMarket: [],
        },
      },
    })
  ),
}));

test("renders loading message initially", () => {
  render(<ProductsList />);

  const loadingMessage = screen.getByText("Loading...");
  expect(loadingMessage).toBeTruthy();

  // Hacemos una espera manual para dar tiempo a que los datos se carguen
  setTimeout(() => {
    const recommendationsTitle = screen.queryByText(
      "Our recommendations to visit"
    );
    const multiCountryTitle = screen.queryByText(
      "Multi country vacation packages including"
    );
    expect(recommendationsTitle).toBeTruthy();
    expect(multiCountryTitle).toBeTruthy();
  }, 1000); // Esperamos 1 segundo (puedes ajustar este tiempo según sea necesario)
});
