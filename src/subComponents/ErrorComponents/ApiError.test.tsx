import { fireEvent, getByRole, getByTestId, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyContext from "../../context/DataContext"
import ApiError from "./ApiError"

const mockContextTrue: any = {
  hasApiError: true,
  setHasApiError: jest.fn()
}
const mockContextFalse: any = {
  hasApiError: false,
  setHasApiError: jest.fn()
}

const renderApiError = (
  mockContextTrue: any
) => {
return (
  <MyContext.Provider value={mockContextTrue} >
    <BrowserRouter>
      <ApiError />
    </BrowserRouter>
  </MyContext.Provider>
)
}
   
it('should render api error component', () => {
    render(renderApiError(mockContextTrue))
    const apiError = screen.getByTestId("api-error-wrapper")
    expect(apiError).toBeInTheDocument()
  })

it('should register click when clicked on', () => {
    render(renderApiError(mockContextTrue))
    const button = screen.getByTestId("button")
    fireEvent.click(button)
    expect(mockContextTrue.setHasApiError).toHaveBeenCalledTimes(1)
})

it('should render null if state is false', () => {
  render(renderApiError(mockContextFalse))
  expect(screen.queryByTestId("api-error-wrapper")).toBeNull()
})
