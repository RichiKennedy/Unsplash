import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NoPage from "./NoPageFound"

it('should render no page component', () => {
    render(
        <BrowserRouter>
        <NoPage />
        </BrowserRouter>
    )
    const noPage = screen.getByTestId('no-page-wrapper');
    expect(noPage).toBeDefined();
})
