import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "./About";

it('should render header component', () => {
    render(<BrowserRouter><About /></BrowserRouter>)

    const about = screen.getByTestId('about-wrapper');
    expect(about).toBeDefined();
})