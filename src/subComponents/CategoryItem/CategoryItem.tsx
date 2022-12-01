import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryType } from '../../types/categoryTypes'

interface CategoryProps {
  category: CategoryType
}

const CategoryItem = ({ category }: CategoryProps) => (
  <Link
    data-test="item-wrapper"
    className="cursor-pointer hover:underline underline-offset-4"
    to={`/${category.id}`}
  >
    {category.name}
  </Link>
)

export default CategoryItem
