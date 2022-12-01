import { render, screen } from "@testing-library/react"
import { BrowserRouter, Link } from "react-router-dom"
import CategoryItem from "./CategoryItem"

const mockCategoryType = {
  name: "",
  id: ""
}

it('should render category item component', () => {
  render(
    <BrowserRouter>
  <CategoryItem category={mockCategoryType}  />
  </BrowserRouter>
  )

  const categoryItem = screen.getByTestId("item-wrapper")
  expect(categoryItem).toBeDefined()
})
