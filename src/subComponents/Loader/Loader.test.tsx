import { render, screen } from "@testing-library/react"
import Loader from "./Loader"

describe('loader component', () => {
  it('should render', () => {
    render(<Loader />)
    const loader = screen.getByTestId('loader-wrapper')
    expect(loader).toBeDefined()
  })
})