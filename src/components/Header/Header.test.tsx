import React from "react";
import Header from "./Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


it('should render header component', () => {
    render(<BrowserRouter><Header homePage={false} /></BrowserRouter>)

    const header = screen.getByTestId('header-wrapper');
    expect(header).toBeDefined();
})

it('should change background-color on scroll', () => {
    render(<BrowserRouter><Header homePage={true} /></BrowserRouter>)
    const header = screen.getByTestId('header-wrapper');

    fireEvent.scroll(window, { target: { scrollY: 100 } });
    
    expect(header).toHaveStyle('background-color: white');
})

it('should change background-color to white if not home', () => {
    render(<BrowserRouter><Header homePage={false} /></BrowserRouter>)
    const header = screen.getByTestId('header-wrapper');
    expect(header).toHaveStyle('background-color: white');
})