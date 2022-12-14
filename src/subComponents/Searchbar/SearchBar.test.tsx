import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import MyContext from "../../context/DataContext"
import SearchBar from "./SearchBar"

const mockContext: any = {
  fetchUnsplashImages: jest.fn(),
  inputValue: "",
  setInputValue: jest.fn()
}

const renderSearchBar = (
  mockContext: any,
) => {
  render(
  <MyContext.Provider value={mockContext}>
    <BrowserRouter>
    <SearchBar />
    </BrowserRouter>
  </MyContext.Provider>
  )
}

describe('search bar component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render', () => {
    renderSearchBar(mockContext)
    const formWrapper = screen.getByTestId('form-wrapper')
    const input = screen.getByTestId('input')
    const button = screen.getByTestId('button')
    expect(formWrapper).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should input and set value', () => {
    renderSearchBar(mockContext)
    const input = screen.getByTestId('input') as HTMLInputElement
    fireEvent.change(input, {target: {value: 'lorem ipsum'}})
    expect(mockContext.setInputValue).toHaveBeenCalledTimes(1)
    expect(mockContext.setInputValue).toBeCalledWith('lorem ipsum')
  })

  it('should call fetch function once icon is clicked', () => {
    renderSearchBar(mockContext)
    const button = screen.getByTestId('button')
    fireEvent.click(button)
    expect(mockContext.fetchUnsplashImages).toHaveBeenCalledTimes(1)
  })
})