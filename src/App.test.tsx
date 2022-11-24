import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders app component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
// expect to test what?
});
