import { render, screen } from "@testing-library/react"
import Skeleton from "./Skeleton"

it('should render skeleton component', () => {
  render(<Skeleton />)
  const skeletonWrapper = screen.getByTestId('skeleton-wrapper')
  expect(skeletonWrapper).toBeDefined()
  expect(skeletonWrapper).toBeInTheDocument()
})