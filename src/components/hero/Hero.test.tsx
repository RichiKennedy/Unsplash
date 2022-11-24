import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";

it("should render header component", () => {
  render(
    <BrowserRouter>
      <Hero categoryID={undefined} />
    </BrowserRouter>
  );

  const hero = screen.getByTestId("hero-wrapper");
  expect(hero).toBeDefined();
});
