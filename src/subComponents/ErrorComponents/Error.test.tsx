import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyContext from "../../context/DataContext"
import Error from "./Error"

const mockContextTrue: any = {
  hasError: true,
  setHasError: jest.fn()
}
const mockContextFalse: any = {
  hasError: false,
  setHasError: jest.fn()
}
 
const renderError = (
  mockContextTrue: any
) => {
  return (
    <MyContext.Provider value={mockContextTrue} >
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    </MyContext.Provider>
  )
}

it('should render error component', () => {
  render(renderError(mockContextTrue))
  const error = screen.getByTestId("error-wrapper")
  expect(error).toBeInTheDocument()
})

it('should register click when clicked on', () => {
  render(renderError(mockContextTrue))
  const button = screen.getByTestId("button")
  fireEvent.click(button)
  expect(mockContextTrue.setHasError).toHaveBeenCalledTimes(1)
})

it('should render null if state is false', () => {
render(renderError(mockContextFalse))
expect(screen.queryByTestId("error-wrapper")).toBeNull()
})
