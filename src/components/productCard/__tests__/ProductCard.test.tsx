import React from "react";
import { render } from "@testing-library/react";
import ProductCard from "../ProductCard";
import mockProduct from "./__fixtures__/mockProduct.json";

test("renders product card with correct details", () => {
  const { getByText, getByAltText } = render(
    <ProductCard product={mockProduct} />
  );

  // Verificar si el texto y los atributos están presentes en el DOM
  expect(getByText("Mock Product")).toBeTruthy();
  expect(getByText("Mock Destination")).toBeTruthy();
  expect(getByText("7 days")).toBeTruthy();
  expect(getByText("Extra nights: 2")).toBeTruthy();
  expect(getByText("From $1000")).toBeTruthy();
  expect(getByText("$800")).toBeTruthy();
  expect(getByText("Per night: $100")).toBeTruthy();
  expect(getByText("Tag 1")).toBeTruthy();
  expect(getByText("Tag 2")).toBeTruthy();

  // Verificar si la imagen tiene el atributo alt correcto
  const productImage = getByAltText("Mock Product");
  expect(productImage).toBeTruthy();
});
